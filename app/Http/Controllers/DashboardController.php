<?php

namespace App\Http\Controllers;

use App\Traits\HttpResponses;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    use HttpResponses;
    public function get(Request $request)
    {
        // \Illuminate\Support\Facades\Log::info($request);
        return $this::success(null, "Welcome to the dashboard");
    }
    //
}
