<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Food\VariationController;

Route::group(['middleware'=> ['auth:sanctum']], function(){

  Route::get('/variations', [VariationController::class, 'get']);
  Route::post('/variations', [VariationController::class, 'post']);
  Route::put('/variations/{id}', [VariationController::class, 'put']);
  Route::delete('/variations/{id}', [VariationController::class, 'delete']);
  
});
