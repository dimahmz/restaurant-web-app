
<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Restaurant\PaymentTypeController;

Route::group(['middleware'=> ['auth:sanctum']], function(){

Route::get('/payment_types', [PaymentTypeController::class, 'get']);
Route::post('/payment_types', [PaymentTypeController::class, 'post']);
Route::put('/payment_types/{id}', [PaymentTypeController::class, 'put']);
Route::delete('/payment_types/{id}', [PaymentTypeController::class, 'delete']);

});