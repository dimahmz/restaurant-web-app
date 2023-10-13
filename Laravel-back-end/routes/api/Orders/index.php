<?php 
use App\Http\Controllers\Order\OrderController;
use App\Http\Controllers\Order\PosOrderController;
use App\Http\Controllers\Order\OnlineOrderController;

Route::group(['middleware'=> ['auth:sanctum']], function(){
  // online 
  Route::get('/online_orders', [OnlineOrderController::class, 'get']);
Route::post('/online_order', [OnlineOrderController::class, 'post']);

// point of sell
Route::get('/pos_orders', [PosOrderController::class, 'get']);
Route::post('/pos_order', [PosOrderController::class, 'post']);
Route::delete('/pos_order', [OnlineOrderController::class, 'delete']);

Route::get('/order/{id}', [OrderController::class, 'getById']);
Route::get('/orders', [OrderController::class, 'get']);
Route::get('/orders/kitchen', [OrderController::class, 'getKitchenOrders']);
Route::put('/order/{id}', [OrderController::class, 'put']);
Route::delete('/order/{id}', [OrderController::class, 'delete']);

});
