<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\CommonCollection;
use App\Http\Resources\UserResource;
use App\Models\AdminMessage;
use App\Validates\UserValidate;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Config;
use Symfony\Component\HttpFoundation\Response;

class UsersController extends AdminController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api');
    }

    public function list(Request $request, User $model)
    {
        $per_page = $request->get('per_page', 10);
        $search_data = json_decode($request->get('search_data'), true);

        $email = isset_and_not_empty($search_data, 'email');
        if ($email) {
            $model = $model->columnLikeSearch('email', '%' . $email);
        }

        $enable = isset_and_not_empty($search_data, 'enable');
        if ($enable) {
            $model = $model->columnEqualSearch('enable', $enable);
        }

        $is_admin = isset_and_not_empty($search_data, 'is_admin');
        if ($is_admin) {
            $model = $model->columnEqualSearch('is_admin', $is_admin);
        }
        $model = $model->where("id", ">", 1);

        $order_by = isset_and_not_empty($search_data, 'order_by');
        if ($order_by) {
            $order_by = explode(',', $order_by);
            $model = $model->orderBy($order_by[0], $order_by[1]);
        }

        return new CommonCollection($model->paginate($per_page));
    }


    public function show(User $model)
    {
        return new UserResource($model);
    }


    public function store(Request $request, User $model, UserValidate $validate)
    {
        $request_data = $request->all();

        $rest_validate = $validate->storeValidate($request_data);
        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);
        $new_request_data = $rest_validate['data'];

        $res = $model->storeAction($new_request_data);
        if ($res['status'] === true) {
            return $this->message($res['message']);
        }
        return $this->failed($res['message']);

    }

    public function update(User $model, Request $request, UserValidate $validate)
    {
        $request_data = $request->all();

        $rest_validate = $validate->updateValidate($request_data, $model);
        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);
        $new_request_data = $rest_validate['data'];

        $res = $model->updateAction($new_request_data);
        if ($res['status'] === true) {
            return $this->message($res['message']);
        }
        return $this->failed($res['message']);
    }

    public function destroy(User $model, UserValidate $validate)
    {
        if (!$model) return $this->failed('找不到用户', Response::HTTP_NOT_FOUND);

        $rest_validate = $validate->destroyValidate($model);

        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);
        $rest_destroy = $model->destroyAction();
        if ($rest_destroy['status'] === true) {
            return $this->message($rest_destroy['message']);
        }
        return $this->failed($rest_destroy['message']);
    }

    public function currentUser()
    {
        $authUser = Auth::user();
        $return = $authUser->toArray();
        $return['roles'] = [];
        foreach ($authUser->roles as $role) {
            $return['roles'][] = $role['name'];
        }
        $return['unread_message'] = AdminMessage::where('is_read', 'F')->whereIn('admin_id', [$authUser->id, 0])->count();
        $return['system_version'] = Config::get('lu.current_version');

        return $this->success($return);
    }

    public function updatePassword(Request $request, UserValidate $validate)
    {
        $request_data = $request->all();

        $rest_validate = $validate->updatePasswordValidate($request_data);
        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);
        $new_request_data = $rest_validate['data'];

        $user = Auth::user();
        $user->password = bcrypt($new_request_data['password']);
        $user->save();
        return $this->message('密码修改成功');
    }

    public function getUserRoles(User $model)
    {
        $roles = $model->roles()->get();
        $return = [];
        $roles->each(function ($per) use (&$return) {
            $return[] = strval($per->id);
        });

        return $this->success($return);
    }

    public function giveUserRoles(Request $request, User $model)
    {
        $roles = $request->post('role');
        $model->syncRoles($roles);
        return $this->message('角色分配成功');
    }

    public function searchUserPassMobile($mobile, User $user)
    {
        $rest_user = $user->columnLikeSearch('mobile', '%' . $mobile)->select('id', 'real_name', 'mobile')->get();
        return $this->success($rest_user);
    }

    public function searchAdminUserPassEmail($email, User $user)
    {
        $rest_user = $user->columnEqualSearch('is_admin', 'T')->columnLikeSearch('email', '%' . $email)->select('id', 'email', 'mobile')->get();
        return $this->success($rest_user);
    }

    public function resetPassword(Request $request, UserValidate $validate, User $model)
    {
        $request_data = $request->all();
        $authUser = Auth::user();
        $rest_validate = $validate->resetPasswordValidate($request_data);
        if ($rest_validate['status'] === false) return $this->failed($rest_validate['message']);
        $new_request_data = $rest_validate['data'];
        $res = $model->resetPasswordAction($new_request_data, $authUser);
        if ($res['status'] === true) {
            return $this->message($res['message']);
        }
        return $this->failed($res['message']);

    }

}
