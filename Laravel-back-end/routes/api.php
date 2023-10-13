<?php

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\PasswordResetLinkController;

// Food
include 'api/Food/groups.php';
include 'api/Food/variations.php';
include 'api/Food/index.php';
// Order
include 'api/Orders/index.php';
// Restaurant
include 'api/Restaurant/branches.php';
include 'api/Restaurant/department_tags.php';
include 'api/Restaurant/tables.php';
include 'api/Restaurant/payment_types.php';
// Stock
include "api/Stock/purchases.php";
include "api/Stock/suppliers.php";



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return HttpResponses::success($request->user(), "user data", 200);
});

// Auth Routes 
Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'register']);


// logOut
Route::prefix("user")->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Reset password 
Route::namespace(PasswordResetLinkController::class)->prefix('reset-password')->group(function () {
    Route::post('/', [PasswordResetLinkController::class, 'store']);
    Route::put('/{token}', [PasswordResetLinkController::class, 'update']);
});


// Catch-out any route that is not defined
Route::fallback(function () {
    return HttpResponses::error(null, "The requested resource could not be found.", 404);
});
