<?php

namespace App\Models\Orders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderFood extends Model
{
    protected $table = 'order_food';
    
    use HasFactory;
    protected $guarded =["id"];

}
