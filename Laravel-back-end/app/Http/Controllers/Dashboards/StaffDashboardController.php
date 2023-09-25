<?php

namespace App\Http\Controllers\Dashboards;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;

class StaffDashboardController extends Controller
{
    use HttpResponses;

    public function get()
    {
        return $this::success(null, "Staff protected routes");
    }


    //
}
