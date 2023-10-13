<?php 

use App\Http\Controllers\Stock\SupplierController;

Route::group(['middleware'=> ['auth:sanctum']], function(){

  Route::get('/suppliers', [SupplierController::class, 'get']);
  Route::post('/suppliers', [SupplierController::class, 'post']);
  Route::put('/suppliers', [SupplierController::class, 'put']);
  Route::delete('/suppliers', [SupplierController::class, 'delete']);
  
});
