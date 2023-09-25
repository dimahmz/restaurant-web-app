<?php

namespace App\Models\Restaurant;

use App\Models\orders\Order;
use App\Models\Restaurant\Table;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Branch extends Model
{

    public function tables()
    {
        return $this->hasMany(Table::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }


    protected $guarded = ["id"];

    use HasFactory;
}
