<?php 

use App\Http\Controllers\Stock\PurchaseController;

Route::group(['middleware'=> ['auth:sanctum']], function(){

  Route::get('/purchases', [PurchaseController::class, 'get']);
  Route::post('/purchases', [PurchaseController::class, 'post']);
  Route::put('/purchases', [PurchaseController::class, 'put']);
  Route::delete('/purchases', [PurchaseController::class, 'delete']);
  
});

