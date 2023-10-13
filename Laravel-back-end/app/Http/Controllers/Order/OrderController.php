<?php

namespace App\Http\Controllers\Order;

use App\Models\Foods\FoodVariation;
use App\Models\Orders\Order;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    use HttpResponses;
    //
    // function getById($id)
    // {
    //     $order = Order::with('branch','user',"payment_type", 'order_food.food' , 'order_food.variation' )->find($id);
    //     return $this::success($order);
    // }
    function get(Request $request)

    {
        $status_param = $request->query("status");

        $query=Order::query();

        if($status_param) $query->where("status" , "=" , $status_param);
        
        $orders = $query->with('order_food.food','order_food.variation' , 'payment_type')->get();

        return $this::success($orders);
    }

    function getById($id)

    {
        $order = Order::with('branch', 'user', 'payment_type', 'order_food.food', 'order_food.variation')->find($id);
        if ($order) {   
            foreach ($order->order_food as $orderFood) {
                $foodId = $orderFood->food_id;
                $variationId = $orderFood->variation_id;
                $foodVariation = FoodVariation::where('food_id', $foodId)->where('variation_id', $variationId)->first();
                $orderFood->food_variation = $foodVariation;
            }
        }

        return $this::success($order);
    }

    function getKitchenOrders()
    {

        $orders = Order::with('order_food.food','order_food.variation', 'branch' )->whereIn("status",["pending" , "accepted"])->orderBy('created_at' , 'desc')->get();

        return $this::success($orders);
    }


    function put(Request $request, $id)
    {
        $request->validate(['status' => 'required|in:pending,accepted,ready']);

        $order = Order::with('order_food.food','order_food.variation' )->find($id);

        if(!$order) return $this::error("order doesn't exist");
        
        $order->update(['status' => $request->status]);
        
        return $this::success($order, "order has been updated");


    }


    function delete($id) {
        $order = Order::find($id);
        if (!$order) return $this::error(null, "Order whih this Id doesn't exist", 404);
        $order->delete();
        return $this::success(null, 'Deleted');
    }





}

