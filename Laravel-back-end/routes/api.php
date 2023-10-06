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
// Route::post('/test', function (Request $request) {
//     Log::info($request);
//     return "working";
// });
Route::put('/test', function (Request $request) {
    Log::info($request);
    return "working";
});

// Auth Routes 
Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'register']);

        // ------ Food -------

// food Routes 
Route::get('/foods', [FoodController::class, 'get']);
Route::get('/food/variations_properties', [FoodController::class, 'getFood_var_prop']);
Route::get('/groups/foods', [FoodController::class, 'getGroupsFoods']);

Route::post('/food', [FoodController::class, 'post']);
Route::put('/food', [FoodController::class, 'put']);
Route::post('/food/img/{id}', [FoodController::class, 'editImg']);
Route::post('/food/variation/{id}', [FoodController::class, 'addVariation']);
Route::put('/food/{id}', [FoodController::class, 'put']);
Route::delete('/food/{id}', [FoodController::class, 'delete']);
//  food groups
Route::get('/groups', [FoodGroupController::class, 'get']);
Route::post('/groups', [FoodGroupController::class, 'post']);
Route::put('/groups/{id}', [FoodGroupController::class, 'put']);
Route::delete('/groups/{id}', [FoodGroupController::class, 'delete']);
// food properties
Route::get('/food_properties', [PropertyController::class, 'get']);
Route::post('/food_properties', [PropertyController::class, 'post']);
Route::put('/food_properties', [PropertyController::class, 'put']);
Route::delete('/food_properties', [PropertyController::class, 'delete']);
// food variations
Route::get('/variations', [VariationController::class, 'get']);
Route::post('/variations', [VariationController::class, 'post']);
Route::put('/variations/{id}', [VariationController::class, 'put']);
Route::delete('/variations/{id}', [VariationController::class, 'delete']);

    // ------- Orders ----------

// Online
Route::get('/online_orders', [OnlineOrderController::class, 'get']);
Route::post('/online_order', [OnlineOrderController::class, 'post']);

// point of sell
Route::get('/pos_orders', [PosOrderController::class, 'get']);
Route::post('/pos_order', [PosOrderController::class, 'post']);
Route::delete('/pos_order', [OnlineOrderController::class, 'delete']);


// Order routes

Route::get('/order/{id}', [OrderController::class, 'getById']);
Route::get('/orders', [OrderController::class, 'get']);
Route::get('/orders/kitchen', [OrderController::class, 'getKitchenOrders']);
Route::put('/order/{id}', [OrderController::class, 'put']);
Route::delete('/order/{id}', [OrderController::class, 'delete']);


    // ------- Stock ----------

// purchases
Route::get('/purchases', [OrderController::class, 'get']);
Route::post('/purchases', [PurchaseController::class, 'post']);
Route::put('/purchases', [PurchaseController::class, 'put']);
Route::delete('/purchases', [PurchaseController::class, 'delete']);

// suppliers
Route::get('/suppliers', [SupplierController::class, 'get']);
Route::post('/suppliers', [SupplierController::class, 'post']);
Route::put('/suppliers', [SupplierController::class, 'put']);
Route::delete('/suppliers', [SupplierController::class, 'delete']);

    // ------- Restaurant ----------
// branches
Route::get('/branches', [BranchController::class, 'get']);
Route::post('/branches', [BranchController::class, 'post']);
Route::put('/branches/{id}', [BranchController::class, 'put']);
Route::delete('/branches/{id}', [BranchController::class, 'delete']);

// Dept Tags
Route::get('/department_tags', [DepartmentTagController::class, 'get']);
Route::post('/department_tags', [DepartmentTagController::class, 'post']);
Route::put('/department_tags/{id}', [DepartmentTagController::class, 'put']);
Route::delete('/department_tags/{id}', [DepartmentTagController::class, 'delete']);

// tables
Route::get('/tables', [TableController::class, 'get']);
Route::get('/tables/branch', [TableController::class, 'get_with_branch']);
Route::post('/tables', [TableController::class, 'post']);
Route::put('/tables/{id}', [TableController::class, 'put']);
Route::delete('/tables/{id}', [TableController::class, 'delete']);

// Payment types
Route::get('/payment_types', [PaymentTypeController::class, 'get']);
Route::post('/payment_types', [PaymentTypeController::class, 'post']);
Route::put('/payment_types/{id}', [PaymentTypeController::class, 'put']);
Route::delete('/payment_types/{id}', [PaymentTypeController::class, 'delete']);




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

    }
    
);
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
Route::any('{any}', function () {
    return HttpResponses::error(null, "The requested resource could not be found.", 404);
})->where('any', '.*');
