<?php

use App\Http\Controllers\Auth\PasswordResetLinkController;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Dashboards\AdminDashboardController;
use App\Http\Controllers\Dashboards\DeliverymanDashboardController;
use App\Http\Controllers\Dashboards\StaffDashboardController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return HttpResponses::success($request->user(), "user data", 200);
});

// Public Routes 
Route::post('/test', function () {
    return "api is working ";
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'register']);

// \Illuminate\Support\Facades\Log::info("log something");

// Protected Routes
Route::group(
    ['middleware' => ['auth:sanctum']],

    // Dashboard Routes
    function () {
        Route::prefix('dashboard')->group(function () {
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
        });

        // Edit a user routes
        Route::prefix("user")->group(function () {
            Route::post('/logout', [AuthController::class, 'logout']);
        });
    }

);

// Reset password 
Route::namespace(PasswordResetLinkController::class)->prefix('reset-password')->group(function () {
    Route::post('/', [PasswordResetLinkController::class, 'store']);
    Route::put('/{token}', [PasswordResetLinkController::class, 'update']);
});


// TODO an alternative for using just one route
// Route::get('/dashboard', function () {
//     // ...
// })->middleware([First::class, Second::class]);

// Catch-out any route that is not defined
Route::any('{any}', function () {
    return HttpResponses::error(null, "The requested resource could not be found.", 404);
})->where('any', '.*');
