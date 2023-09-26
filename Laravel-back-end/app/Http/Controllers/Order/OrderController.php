<?php

namespace App\Http\Controllers\Order;

use App\Models\Orders\Order;
use App\Traits\HttpResponses;
use App\Models\Orders\OrderFood;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    use HttpResponses;
    //
    function get($id)
    {
        $orderDtail = Order::with('branch','user')->find($id);
        $food_order = OrderFood::with("variation" , "food")->where('order_id' , '=', $id)->get();
        $order = ['food_order' => $food_order , 'order'=> $orderDtail];
        return $this::success($order);
    }

}
