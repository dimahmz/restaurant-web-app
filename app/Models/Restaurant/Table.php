<?php

namespace App\Models\Restaurant;

use App\Models\Restaurant\Branch;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Table extends Model
{

    use HasFactory;
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    protected $guarded =["id"];

}
