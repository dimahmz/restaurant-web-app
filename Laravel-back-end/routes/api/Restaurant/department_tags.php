
<?php 

use App\Http\Controllers\Restaurant\DepartmentTagController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware'=> ['auth:sanctum']], function(){

Route::get('/department_tags', [DepartmentTagController::class, 'get']);
Route::post('/department_tags', [DepartmentTagController::class, 'post']);
Route::put('/department_tags/{id}', [DepartmentTagController::class, 'put']);
Route::delete('/department_tags/{id}', [DepartmentTagController::class, 'delete']);

});