<?php
$db = require(__DIR__ . '/db.php');

return [
    'components' => [
        'user' => [
            'class' => 'yii\web\User',
            'identityClass' => 'app\modules\admin\models\User',
        ]
    ]
];