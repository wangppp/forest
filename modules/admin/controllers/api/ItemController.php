<?php
/**
 * Created by PhpStorm.
 * User: Peng
 * Date: 2017/7/26
 * Time: 上午8:59
 */

namespace app\modules\admin\controllers\api;
use Yii;
use yii\filters\auth\HttpBearerAuth;
use app\modules\admin\controllers\BaseApiController;

class ItemController extends BaseApiController
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        if (Yii::$app->getRequest()->getMethod() !== 'OPTIONS') {
            $behaviors['authenticator'] = [
                'class' => HttpBearerAuth::className(),
            ];
        }
        return $behaviors;
    }
    public function actionIndex()
    {
        return ['success'=>1,'msg'=>'hello'];
    }
}
