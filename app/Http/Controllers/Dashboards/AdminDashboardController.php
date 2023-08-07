<?php

namespace App\Http\Controllers\Dashboards;

use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    //
    use HttpResponses;

    public function get()
    {
        return $this::success(null, "Admin protected routes");
    }
}
