<?php

namespace App\Http\Controllers\Order;

use App\Models\Orders\Order;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Orders\OrderFood;
use App\Models\Foods\PropertyItem;
use App\Http\Controllers\Controller;
use App\Models\Orders\OrderFoodItem;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    use HttpResponses;
    //
    function get($id)
    {
        $orderDtail = Order::with('branch')->find($id);
        $food_order = OrderFood::with("variation" , "food")->where('order_id' , '=', $id)->get();
        $order = ['food_order' => $food_order , 'order'=> $orderDtail];
        return $this::success($order);
    }

}
