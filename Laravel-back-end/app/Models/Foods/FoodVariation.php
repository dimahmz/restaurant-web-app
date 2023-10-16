<?php

namespace App\Models\Foods;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class FoodVariation extends Pivot
{
    protected $table = "food_variations";

    

    use HasFactory;
}
// public function variations()
// {
//     return $this->belongsToMany(Variation::class);
// }
