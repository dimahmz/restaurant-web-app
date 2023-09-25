<?php

namespace App\Models\Stock;

use App\Models\Stock\Purchase;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Supplier extends Model
{
    use HasFactory;
    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }

    protected $guarded = ["id"];
}
