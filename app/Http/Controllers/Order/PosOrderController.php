<?php

namespace App\Http\Controllers\Order;

use App\Models\Orders\Order;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use App\Http\Requests\Order\StorePOSorder;

class PosOrderController extends Controller
{
    use HttpResponses;

    // ------- Create ----------
    function post(StorePOSorder $request)
    {
        $order = Order::create([
            'branch_id' => $request->branch_id,
            'food_id' => $request->food_id,
            'user_id' => $request->user_id,
            'variation_id' => $request->variation_id,
            'quantity' => $request->quantity,
            'subtotal' => $request->subtotal,
            'department_commission' => $request->department_commission,
            'paid_amount'=> $request->paid_amount,
            'due_amount'=> $request->due_amount,
            'delivery_time'=> null,
            'total_bill' => $request->total_bill,
            'is_online'  => 0
        ]);
         // create the the order propertiesPosOrderController
         if ($request->property_items)
            $order->property_items()->attach($request->property_items);
        return $this::success($order);
    }
    // --------- read ----------
    function get()
    {
        $orders = Order::with('branch' , 'property_items.property' , 'variation' , 'food')->where('is_online', 0)->get();
        return $this::success($orders);
    }
}
