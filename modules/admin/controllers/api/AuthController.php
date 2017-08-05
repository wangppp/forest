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
        $email = \Yii::$app->request->post('email');
        $password = \Yii::$app->request->post('password');
        if($email == "admin" && $password == "admin")
        {
            return ['success'=>1,'token'=>'100-token'];
        }
        return ['success'=>0,'msg'=>'error'];
    }
}