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
        return $this::success(null, "Payment has been added!");
    }
    // --------- read ----------
    function get()
    {
        $payment_type = PaymentType::orderBy('created_at' , 'desc')->get();
        return $this::success($payment_type);
    }

    // --------update -------
    function put(Request $request, $id)
    {
        $request->validate(['name' => 'required|string' ]);
        $payment_type = PaymentType::where('id', $request->id)->update([
            "name" => $request->name,
        ]);
        if (!$payment_type) return $this::error(null, "Payment type whih this Id doesn't exist", 404);

        return $this::success(null, "Payment has been updated!");
    }
    // ------- delete -----------
    function delete($id) {
        $payment_type = PaymentType::find($id);
        if (!$payment_type) return $this::error(null, "Payment type whih this Id doesn't exist", 404);

        $payment_type->delete();

        return $this::success(null, 'Deleted');
    }


}
