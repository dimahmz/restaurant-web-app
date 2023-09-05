<?php

namespace App\Models\Foods;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PropertyItem extends Model
{
    use HasFactory;

    public function property_items(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }
}
