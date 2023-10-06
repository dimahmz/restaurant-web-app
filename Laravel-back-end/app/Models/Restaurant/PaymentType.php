<?php

namespace App\Models\Restaurant;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentType extends Model
{

    protected $table = 'payment_types';

    use HasFactory;

    protected $guarded =["id"];

}
