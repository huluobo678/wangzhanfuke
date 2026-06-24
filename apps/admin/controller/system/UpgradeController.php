<?php
namespace app\admin\controller\system;

use core\basic\Controller;

class UpgradeController extends Controller
{
    public function index()
    {
        error('系统更新由技术人员统一维护。', -1);
    }

    public function checkCache()
    {
        json(0, '');
    }

    public function check()
    {
        json(0, '系统更新由技术人员统一维护。');
    }

    public function down()
    {
        json(0, '系统更新由技术人员统一维护。');
    }

    public function update()
    {
        json(0, '系统更新由技术人员统一维护。');
    }
}
