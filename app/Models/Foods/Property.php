<?php

namespace App\Models\Foods;

use App\Models\Fsoods\PropertyItems;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Property extends Model
{
    use HasFactory;
    public function foods(): BelongsToMany
    {
        return $this->belongsToMany(Food::class, 'food_properties');
    }

    public function property_items(): HasMany
    {
        return $this->hasMany(PropertyItem::class);
    }
}
