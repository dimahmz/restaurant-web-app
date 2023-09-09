<?php

namespace App\Observers;

use App\Exceptions\OutOfStockException;
use App\Models\Foods\Food;
use App\Models\orders\Order;
use App\Traits\HttpResponses;

class OrderObserver
{
    use HttpResponses;
    public function creating(Order $order): void
    {

        $food = Food::find($order->food_id);

        if($food->in_stock < $order->quantity){
            throw new OutOfStockException();
        }
    }

}
