<?php

namespace App\Models\Orders;

use App\Models\Foods\Food;
use App\Models\Orders\OrderFood;
use App\Models\Restaurant\Branch;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    public function branch()
    {
        return $this->belongsTo(Branch::class)->select(["id" , "name"]);
    }
    public function food()
    {
        return $this->belongsToMany(Food::class, 'order_food')->withPivot("quantity", "variation_id");
    }
    protected $guarded =["id"];
}
