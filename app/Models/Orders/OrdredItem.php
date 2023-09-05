<?php

namespace App\Models\Orders;

use App\Models\orders\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrdredItem extends Model
{
    use HasFactory;
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
