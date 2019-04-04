<?php

return [
    'current_version' => '1.1.1.01',
    'demo' => 'demo',
    'api_app_url' => env('API_APP_URL'),
    'system_config_group_list' => [
        'basic' => ['title' => '基本配置', 'icon' => 'ios-medal', 'desc' => ''],
        'content' => ['title' => '内容配置', 'icon' => 'md-menu', 'desc' => ''],
        'user' => ['title' => '用户配置', 'icon' => 'ios-walk', 'desc' => ''],
        'system' => ['title' => '系统配置', 'icon' => 'ios-trophy-outline', 'desc' => ''],
    ],
    'article_aes_encrypt_key'  => [ // 文章密码加密密钥
        'first_key'  => env('ARTICLE_AES_FIRST_ENCRYPT_KEY'),
        'second_key'  => env('ARTICLE_AES_SECOND_ENCRYPT_KEY'),
    ]
];
