<?php

namespace App\Http\Controllers\Dashboards;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;

class DeliverymanDashboardController extends Controller
{
    use HttpResponses;

    public function get()
    {
        return $this::success(null, "Deliveryman protected routes");
    }

    //
}
