<?php

namespace App\Http\Controllers\Order;

use App\Models\Orders\Order;
use App\Traits\HttpResponses;
use App\Models\Orders\OrderFood;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    use HttpResponses;
    //
    function getById($id)
    {
        $order = Order::with('branch','user','order_food.food' , 'order_food.variation')->find($id);
        return $this::success($order);
    }
    function get(Request $request)

    {
        $status_param = $request->query("status");

        $query=Order::query();

        if($status_param) $query->where("status" , "=" , $status_param);
        
        $orders = $query->with('order_food.food','order_food.variation' )->get();

        return $this::success($orders);
    }
    function getKitchenOrders()
    {

        $orders = Order::with('order_food.food','order_food.variation' )->whereIn("status",["pending" , "accepted"])->get();

        return $this::success($orders);
    }


    function put(Request $request, $id)
    {
        $request->validate(['status' => 'required|in:pending,accepted,ready']);

        $order = Order::find($id);

        if(!$order) return $this::error("order doesn't exist");
        
        $order->update(['status' => $request->status]);
        
        return $this::success("order has been updated");


    }






}
