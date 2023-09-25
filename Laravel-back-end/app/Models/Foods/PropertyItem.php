<?php

namespace App\Models\Foods;

use App\Models\orders\Order;
use App\Models\Orders\OrderFood;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyItem extends Model
{
    use HasFactory;

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    function order_food(){
        return $this->belongsToMany(OrderFood::class , 'order_food_items');
    }
    protected $table = "property_items";

}
