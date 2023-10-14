
<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Restaurant\BranchController;

Route::get('/branches', [BranchController::class, 'get']);
Route::group(['middleware'=> ['auth:sanctum']], function(){

  Route::post('/branches', [BranchController::class, 'post']);
  Route::put('/branches/{id}', [BranchController::class, 'put']);
  Route::delete('/branches/{id}', [BranchController::class, 'delete']);
  
});

