<?php

namespace App\Models\Orders;

use App\Models\Foods\Food;
use App\Models\Foods\Variation;
use App\Models\Foods\PropertyItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderFood extends Pivot
{
    protected $table = 'order_food';
    
    function variation(){
        return $this->belongsTo(Variation::class);
    }

    function food_variation(){
        return $this->hasOneThrough(Variation::class, 'food_variations');
    }

    function propertyItems(){
        return $this->belongsToMany(PropertyItem::class , 'order_food_items');

    }

    function order(){
        return $this->belongsTo(Order::class );
    }

    function food(){
        return $this->belongsTo(Food::class);
    }



    use HasFactory;
    protected $guarded =["id"];

}
