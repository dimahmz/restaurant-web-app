<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Food\FoodGroupController;

Route::group(['middleware'=> ['auth:sanctum']], function(){

  Route::get('/groups', [FoodGroupController::class, 'get']);
  Route::post('/groups', [FoodGroupController::class, 'post']);
  Route::put('/groups/{id}', [FoodGroupController::class, 'put']);
  Route::delete('/groups/{id}', [FoodGroupController::class, 'delete']);
  
});

