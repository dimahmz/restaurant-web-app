<?php

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Food\FoodController;
use App\Http\Controllers\Order\OrderController;
use App\Http\Controllers\Food\PropertyController;
use App\Http\Controllers\Food\FoodGroupController;
use App\Http\Controllers\Food\VariationController;
use App\Http\Controllers\Order\PosOrderController;
use App\Http\Controllers\Stock\PurchaseController;
use App\Http\Controllers\Stock\SupplierController;
use App\Http\Controllers\Restaurant\TableController;
use App\Http\Controllers\Order\OnlineOrderController;
use App\Http\Controllers\Restaurant\BranchController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Restaurant\PaymentTypeController;
use App\Http\Controllers\Restaurant\DepartmentTagController;
use App\Http\Controllers\Dashboards\AdminDashboardController;
use App\Http\Controllers\Dashboards\StaffDashboardController;
use App\Http\Controllers\Dashboards\DeliverymanDashboardController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return HttpResponses::success($request->user(), "user data", 200);
});

// --------  Public Routes  ------------
Route::post('/test', function (Request $request) {
    return "working";
});

// Auth Routes 
Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'register']);

        // ------ Food -------

// food Routes 
Route::get('/foods', [FoodController::class, 'get']);
Route::post('/food/create', [FoodController::class, 'post']);
Route::put('/food/update', [FoodController::class, 'put']);
Route::delete('/food/delete', [FoodController::class, 'delete']);
// food groups
Route::get('/food/groups', [FoodGroupController::class, 'get']);
Route::post('/food/groups/create', [FoodGroupController::class, 'post']);
Route::put('/food/groups/update', [FoodGroupController::class, 'put']);
Route::delete('/food/groups/delete', [FoodGroupController::class, 'delete']);
// food properties
Route::get('/food/properties', [PropertyController::class, 'get']);
Route::post('/food/properties/create', [PropertyController::class, 'post']);
Route::put('/food/properties/update', [PropertyController::class, 'put']);
Route::delete('/food/properties/delete', [PropertyController::class, 'delete']);
// food variations
Route::get('/food/variations', [VariationController::class, 'get']);
Route::post('/food/variations/create', [VariationController::class, 'post']);
Route::put('/food/variations/update', [VariationController::class, 'put']);
Route::delete('/food/variations/delete', [VariationController::class, 'delete']);

    // ------- Orders ----------

// Online
Route::get('/online_orders', [OnlineOrderController::class, 'get']);
Route::post('/online_order/create', [OnlineOrderController::class, 'post']);
Route::put('/online_order/update', [OnlineOrderController::class, 'put']);
Route::delete('/online_order/delete', [OnlineOrderController::class, 'delete']);

// point of sell
Route::get('/pos_orders', [PosOrderController::class, 'get']);
Route::post('/pos_order/create', [PosOrderController::class, 'post']);
Route::put('/pos_order/update', [OnlineOrderController::class, 'put']);
Route::delete('/pos_order/delete', [OnlineOrderController::class, 'delete']);


    // ------- Stock ----------

// purchases
Route::get('/purchases', [OrderController::class, 'get']);
Route::post('/purchases/create', [PurchaseController::class, 'post']);
Route::put('/purchases/update', [PurchaseController::class, 'put']);
Route::delete('/purchases/delete', [PurchaseController::class, 'delete']);

// suppliers
Route::get('/suppliers', [SupplierController::class, 'get']);
Route::post('/suppliers/create', [SupplierController::class, 'post']);
Route::put('/suppliers/update', [SupplierController::class, 'put']);
Route::delete('/suppliers/delete', [SupplierController::class, 'delete']);

    // ------- Restaurant ----------
// branches
Route::get('/branches', [BranchController::class, 'get']);
Route::post('/branches/create', [BranchController::class, 'post']);
Route::put('/branches/update', [BranchController::class, 'put']);
Route::delete('/branches/delete', [BranchController::class, 'delete']);

// Dept Tags
Route::get('/department_tags', [DepartmentTagController::class, 'get']);
Route::post('/department_tags/create', [DepartmentTagController::class, 'post']);
Route::put('/department_tags/update', [DepartmentTagController::class, 'put']);
Route::delete('/department_tags/delete', [DepartmentTagController::class, 'delete']);

// tables
Route::get('/tables', [TableController::class, 'get']);
Route::post('/tables/create', [TableController::class, 'post']);
Route::put('/tables/update', [TableController::class, 'put']);
Route::delete('/tables/delete', [TableController::class, 'delete']);

// Payment types
Route::get('/payment_types', [PaymentTypeController::class, 'get']);
Route::post('/payment_types/create', [PaymentTypeController::class, 'post']);
Route::put('/payment_types/update', [PaymentTypeController::class, 'put']);
Route::delete('/payment_types/delete', [PaymentTypeController::class, 'delete']);




// ------------ Protected Routes --------------
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


// Catch-out any route that is not defined
Route::any('{any}', function () {
    return HttpResponses::error(null, "The requested resource could not be found.", 404);
})->where('any', '.*');
