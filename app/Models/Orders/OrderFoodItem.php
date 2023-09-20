<?php

namespace App\Models\Orders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderFoodItem extends Model
{
    protected $table = 'order_food_items';

    use HasFactory;
    protected $guarded =["id"];

}
