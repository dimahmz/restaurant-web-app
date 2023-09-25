<?php

namespace App\Models\Orders;

use App\Models\Orders\OrderFood;
use App\Models\Foods\PropertyItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderFoodItem extends Model
{
    protected $table = 'order_food_items';

    function propertyItem(){
        return $this->belongsTo(PropertyItem::class);
    }

    function orderFood(){
        return $this->belongsToMany(OrderFood::class , 'order_food_items');

    }


    use HasFactory;
    protected $guarded =["id"];

}
