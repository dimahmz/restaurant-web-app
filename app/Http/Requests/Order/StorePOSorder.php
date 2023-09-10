<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;

class StorePOSorder extends FormRequest
{
    
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'branch_id' => 'required|numeric',
            'variation_id' => 'required|numeric',
            'food_id' => 'required|numeric',
            'user_id' => 'required|numeric',
            'quantity'=> 'required|numeric',
            'subtotal' => 'required|numeric',
            'total_bill' => 'required|numeric',
            'paid_amount'=> 'required|numeric',
            'due_amount'=>  'required|numeric',
            'department_commission' => 'required|numeric',
        ];
    }
}
