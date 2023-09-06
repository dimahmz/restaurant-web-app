<?php

namespace App\Models\Foods;

use App\Models\orders\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Variation extends Model
{
    use HasFactory;
    public function foods(): BelongsToMany
    {
        return $this->belongsToMany(Food::class, 'food_variations');
    }
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
