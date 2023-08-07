<?php

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Dashboards\AdminDashboardController;
use App\Http\Controllers\Dashboards\DeliverymanDashboardController;
use App\Http\Controllers\Dashboards\StaffDashboardController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Public Routes 
Route::get('/test', function () {
    return "api is working ";
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'register']);

// \Illuminate\Support\Facades\Log::info("log something");

// Protected Routes
Route::group(
    ['middleware' => ['auth:sanctum'], 'prefix' => 'dashboard'],
    function () {
        // The admin routes
        Route::group(['middleware' => ['checkrole:Admin']],   function () {
            Route::get('/admin', [AdminDashboardController::class, 'get']);
        });
        // The staff routes
        Route::group(['middleware' => ['checkrole:Staff']],   function () {
            Route::get('/staff', [StaffDashboardController::class, 'get']);
        });
        // The deliveryman routes
        Route::group(['middleware' => ['checkrole:Deliveryman']],   function () {
            Route::get('/deliveryman', [DeliverymanDashboardController::class, 'get']);
        });

        Route::post('/logout', [AuthController::class, 'logout']);
    }
);
// TODO an alternative for using just one route
// Route::get('/dashboard', function () {
//     // ...
// })->middleware([First::class, Second::class]);

// Route::get('/dashboard', [DashboardController::class, 'get']);

// Catch-all route for not found routes
Route::any('{any}', function () {
    return HttpResponses::error(null, "The requested resource could not be found.", 404); // Customize the view and status code as needed
})->where('any', '.*');
