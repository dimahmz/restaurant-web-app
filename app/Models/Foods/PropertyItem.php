<?php

namespace App\Models\Foods;

use App\Models\orders\Order;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PropertyItem extends Model
{
    use HasFactory;

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }

    public function orders()
    {
        return $this->belongToMany(Order::class);
    }
}
