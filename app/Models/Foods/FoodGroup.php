<?php

namespace App\Models\Foods;

use App\Models\Foods\Food;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FoodGroup extends Model
{
    use HasFactory;

    public function foods()
    {
        return $this->hasMany(Food::class);
    }
    protected $fillable = ['name'];
}
