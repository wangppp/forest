<?php
/**
 * Created by PhpStorm.
 * User: Peng
 * Date: 2017/7/26
 * Time: 上午8:55
 */

namespace app\modules\admin\controllers\api;

use app\modules\admin\controllers\BaseApiController;

class AuthController extends BaseApiController
{
    public function actionIndex()
    {
        $username = \Yii::$app->request->post('name');
        $password = \Yii::$app->request->post('password');
        if($username == "admin" && $password == "admin")
        {
            return ['success'=>1,'msg'=>'100-token'];
        }
        return ['success'=>0,'msg'=>'error'];
    }
}