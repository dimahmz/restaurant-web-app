<?php

namespace App\Http\Controllers\Order;

use App\Models\Orders\Order;
use App\Traits\HttpResponses;
use App\Models\Orders\OrderFood;
use App\Http\Controllers\Controller;
use App\Models\Orders\OrderFoodItem;
use App\Http\Requests\Order\StorePOSorder;

class PosOrderController extends Controller
{
    use HttpResponses;

    // ------- Create ----------
    function post(StorePOSorder $request)
    {
        $order = Order::create([
            'branch_id' => $request->branch_id,
            'table_id' => $request->table_id,
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
                // each order food can have multiple property items attched to it  
                // if(isset($order_food['food_property_items'])){
                //     Log::info(isset($order_food['food_property_items']));
                //     foreach ($order_food['food_property_items'] as $food_property_item ){
                //         OrderFoodItem::create([
                //             'order_food_id'=> $new_order_food->id,
                //             'property_item_id'=> $food_property_item['property_item_id'],
                //             'quantity'=>$food_property_item['quantity'],
                //         ]);
                //     }
                // }
        }
        return $this::success(null, "Order has been taken");
    }
    // --------- read ----------
    function get()
    {
        $orders = Order::with('branch' , 'food')->where('is_online', 0)->orderBy('created_at' , 'desc')->get();
        return $this::success($orders);
    }
}
