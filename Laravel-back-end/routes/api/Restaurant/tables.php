
<?php 

use App\Http\Controllers\Restaurant\TableController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware'=> ['auth:sanctum']], function(){

  Route::get('/tables', [TableController::class, 'get']);
  Route::get('/tables/branch', [TableController::class, 'get_with_branch']);
  Route::post('/tables', [TableController::class, 'post']);
  Route::put('/tables/{id}', [TableController::class, 'put']);
  Route::delete('/tables/{id}', [TableController::class, 'delete']);
  
});
