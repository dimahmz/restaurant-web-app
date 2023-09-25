<?php

namespace App\Observers;

use App\Models\Foods\Food;
use App\Models\orders\Order;
use App\Traits\HttpResponses;
use App\Models\Orders\OrderFood;
use Illuminate\Support\Facades\Log;
use App\Exceptions\OutOfStockException;

class OrderObserver
{
    use HttpResponses;
    public function creating(OrderFood $orderFood): void
    {

        $food = Food::find($orderFood->food_id);
        Log::info($food);
        if($food->in_stock < $orderFood->quantity){
            Order::destroy($orderFood->order_id);
            throw new OutOfStockException();
        }

        $food->decrement('in_stock' , $orderFood->quantity);
        $food->save();

    }

}
