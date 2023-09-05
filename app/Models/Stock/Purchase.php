<?php

namespace App\Models\Stock;

use App\Models\Foods\Food;
use App\Models\Stock\Supplier;
use App\Models\Restaurant\Branch;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Purchase extends Model
{
    use HasFactory;
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function food(): BelongsToMany
    {
        return $this->belongsToMany(Food::class, 'food_purchases');
    }
}
