<?php

namespace App\Models\orders;

use App\Models\Orders\OrdredItem;
use App\Models\Restaurant\Branch;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;
    public function ordered_items()
    {
        return $this->hasMany(OrdredItem::class);
    }

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
}
