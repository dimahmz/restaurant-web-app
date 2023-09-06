<?php

namespace App\Models\Orders;

use App\Models\Foods\Food;
use App\Models\Restaurant\Branch;
use App\Models\Foods\PropertyItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
    public function variation()
    {
        return $this->belongsTo(Variation::class);
    }
    public function food()
    {
        return $this->belongsTo(Food::class);
    }
    public function property_items()
    {
        return $this->belongsToMany(PropertyItem::class, 'order_property_items');
    }
}
