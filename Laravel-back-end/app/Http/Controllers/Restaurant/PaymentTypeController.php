<?php

namespace App\Http\Controllers\Restaurant;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use App\Models\Restaurant\PaymentType;

class PaymentTypeController extends Controller
{
    use HttpResponses;

    function post(Request $request)
    {
        $request->validate(['name' => 'required|string' , 'unique_key' => 'required|string' ]);
        $payment_type = PaymentType::create([
            "name" => $request->name,
            'unique_key' => $request->unique_key
        ]);
        return $this::success($payment_type);
    }
    // --------- read ----------
    function get()
    {
        $payment_type = PaymentType::all();
        return $this::success($payment_type);
    }

    // --------update -------
    function put(Request $request)
    {
        $request->validate(['id' => 'required|numeric' ,'name' => 'required|string' , 'unique_key' => 'required|string' ]);
        $payment_type = PaymentType::where('id', $request->id)->update([
            "name" => $request->name,
            'unique_key' => $request->unique_key,
        ]);
        return $this::success($payment_type);
    }
    // ------- delete -----------
    function delete(Request $request) {

        $request->validate(['id' => 'required|numeric']);

        $payment_type = PaymentType::find($request->id);
        if (!$payment_type) return $this::error(null, "Payment type whih this Id doesn't exist", 404);

        $payment_type->delete();

        return $this::success(null, 'Deleted');
    }


}
