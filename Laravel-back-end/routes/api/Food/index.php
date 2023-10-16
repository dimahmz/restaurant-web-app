
<?php 

use App\Http\Controllers\Food\FoodVariationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Food\FoodController;

Route::get('/foods', [FoodController::class, 'get']);
Route::get('/groups/foods', [FoodController::class, 'getGroupsFoods']);
Route::get('/food/variations', [FoodVariationController::class, 'get']);
Route::get('/food/variation/{id}', [FoodVariationController::class, 'getByFoodID']);


Route::group(['middleware'=> ['auth:sanctum']], function(){

  Route::post('/food', [FoodController::class, 'post']);
  Route::put('/food/variations', [FoodVariationController::class, 'put']);
  Route::post('/food/variation/{id}', [FoodVariationController::class, 'post']);
  Route::delete('/food_variation/{id}', [FoodController::class, 'delete']);

  Route::post('/food/img/{id}', [FoodController::class, 'editImg']);
  Route::put('/food/{id}', [FoodController::class, 'put']);
  Route::delete('/food/{id}', [FoodController::class, 'delete']);
  
});