
<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Food\FoodController;

Route::group(['middleware'=> ['auth:sanctum']], function(){

  Route::get('/foods', [FoodController::class, 'get']);
  Route::get('/food/variations_properties', [FoodController::class, 'getFood_var_prop']);
  Route::get('/groups/foods', [FoodController::class, 'getGroupsFoods']);
  Route::post('/food', [FoodController::class, 'post']);
  Route::put('/food', [FoodController::class, 'put']);
  Route::post('/food/img/{id}', [FoodController::class, 'editImg']);
  Route::post('/food/variation/{id}', [FoodController::class, 'addVariation']);
  Route::put('/food/{id}', [FoodController::class, 'put']);
  Route::delete('/food/{id}', [FoodController::class, 'delete']);
  
});
