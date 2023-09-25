<?php

namespace App\Http\Controllers\Order;

use App\Models\Orders\Order;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Orders\OrderFood;
use App\Models\Foods\PropertyItem;
use App\Http\Controllers\Controller;
use App\Http\Requests\Order\StoreOnlineOrder;

class OnlineOrderController extends Controller
{

    use HttpResponses;

    // ------- Create ----------
    function post(StoreOnlineOrder $request)
    {
        $order = Order::create([
            'branch_id' => $request->branch_id,
            'variation_id' => $request->variation_id,
            'food_id' => $request->food_id,
            'user_id' => $request->user_id,
            'quantity' => $request->quantity,
            'delivery_address' => $request->delivery_address,
            'subtotal' => $request->subtotal,
            'total_bill' => $request->total_bill,
            'paid_amount'=> null,
            'due_amount'=> null,
            'is_online' => 1
        ]);
         // create the the order properties
         if ($request->property_items)
            $order->property_items()->attach($request->property_items);
        return $this::success($order);
    }
    // --------- read ----------
    function get()
    {
        $orders = Order::with('branch' , 'food')->where('is_online', '>', 0)->orderBy('created_at' , 'desc')->get();
        return $this::success($orders);
    }

    // --------update -------
    function put(Request $request)
    {
        $request->validate(['id' => 'required|numeric' , 'status' => 'required|string']);
        Order::where('id', $request->id)->update(['status' => $request->status]);
        return $this::success("order has been updated");
    }
    // ------- delete -----------
    function delete(Request $request) {
        $request->validate(['id' => 'required|numeric']);
        $order = Order::find($request->id);
        if (!$order) return $this::error(null, "Order whih this Id doesn't exist", 404);
        $order->delete();
        return $this::success(null, 'Deleted');
    }
}
