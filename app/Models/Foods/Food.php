<?php

namespace App\Models\Foods;

use App\Models\Foods\Property;
use App\Models\Stock\Purchase;
use App\Models\Foods\FoodGroup;
use App\Models\Foods\Variation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Food extends Model
{
    use HasFactory;
    public function properties()
    {
        return $this->belongsToMany(Property::class, 'food_properties');
    }
    public function variations()
    {
        return $this->belongsToMany(Variation::class, 'food_variations');
    }

    public function purchases()
    {
        return $this->belongsToMany(Purchase::class, 'food_purchases');
    }

    public function food_group()
    {
        return $this->belongsTo(FoodGroup::class);
    }


    protected $fillable = [
        "food_group_id",
        "name",
        "price",
        "is_special",
        "image"
    ];
}
