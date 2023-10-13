<?php

namespace App\Http\Controllers\Order;

use App\Models\Foods\FoodVariation;
use App\Models\Orders\Order;
use App\Traits\HttpResponses;
use App\Models\Orders\OrderFood;
use App\Http\Controllers\Controller;
use App\Models\Orders\OrderFoodItem;
use App\Http\Requests\Order\StorePOSorder;
use App\Http\Controllers\Order\OrderController;

class PosOrderController extends Controller
{
    use HttpResponses;

    // ------- Create ----------
    function post(StorePOSorder $request)
    {
        $order = Order::create([
            'branch_id' => $request->branch_id,
            'table_id' => $request->table_id,
            'payment_id' => $request->payment_id,
            'user_id' => $request->user_id,
            'quantity' => $request->quantity,
            'subtotal' => $request->subtotal,
            'department_commission' => $request->department_commission,
            'paid_amount'=> $request->paid_amount,
            'due_amount'=> $request->due_amount,
            'delivery_time'=> null,
            'total_bill' => $request->total_bill,
            'is_online'  => 0
        ]);
        //  create the ordered food tables 
        foreach ($request->order_food as $order_food) {
            $new_order_food = OrderFood::create([
                'order_id'=> $order->id,
                'food_id'=> $order_food['food_id'],
                'variation_id' => $order_food['variation_id'],
                'quantity'=>$order_food['quantity'],        
            ]);
             
        }
        $order = Order::with('branch', 'user', 'payment_type', 'order_food.food', 'order_food.variation')->find($order->id);
        if ($order) {   
            foreach ($order->order_food as $orderFood) {
                $foodId = $orderFood->food_id;
                $variationId = $orderFood->variation_id;
                $foodVariation = FoodVariation::where('food_id', $foodId)->where('variation_id', $variationId)->first();
                $orderFood->food_variation = $foodVariation;
            }
        }
        return $this::success($order, "Order has been taken");
    }
    // --------- read ----------
    function get()
    {
        $orders = Order::with('branch' , 'food')->where('is_online', 0)->orderBy('created_at' , 'desc')->get();
        return $this::success($orders);
    }
}
