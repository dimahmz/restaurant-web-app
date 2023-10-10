<?php

namespace App\Models\Foods;

use App\Models\Foods\Food;
use App\Models\orders\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Variation extends Model
{
    use HasFactory;
    public function food_variation(): BelongsToMany
    {
        return $this->belongsToMany(Food::class, 'food_variations')->withPivot("*");
    }
    public function order_food()
    {
        return $this->hasMany(Food::class, 'order_food');
    }
    protected $fillable = ['name'];

}
