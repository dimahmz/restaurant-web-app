<?php

namespace App\Models\Orders;

use App\Models\Foods\Food;
use App\Models\Foods\Variation;
use App\Models\Restaurant\Branch;
use App\Models\Foods\PropertyItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    public function branch()
    {
        return $this->belongsTo(Branch::class)->select(["id" , "name"]);
    }
    public function variation()
    {
        return $this->belongsTo(Variation::class)->select(["id" , "name"]);
    }
    public function food()
    {
        return $this->belongsTo(Food::class)->select(["id" , "name"]);
    }
    public function property_items()
    {
        return $this->belongsToMany(PropertyItem::class, 'order_property_items')->withPivot("quantity");
    }
    protected $guarded =["id"];
}
