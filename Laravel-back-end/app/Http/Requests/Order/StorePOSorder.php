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
            'order_food' => 'required|array|min:1',
            'order_food.*.food_id' => 'required|numeric',
            'order_food.*.variation_id' => 'present|nullable|numeric',
            'order_food.*.quantity' => 'required|numeric',
            'branch_id' => 'required|numeric',
            'payment_id' => 'required|numeric',
            'user_id' => 'required|numeric',
            'subtotal' => 'required|numeric',
            'total_bill' => 'required|numeric',
            'paid_amount'=> 'required|numeric',
            'due_amount'=>  'required|numeric',
            'department_commission' => 'required|numeric',
        ];
    }

    public function messages(): array{
        return [
            'branch_id.*' => 'You must select a branch',
            'payment_id.*' => 'You must select a payment type',
            'order_food.*' => 'No food item was selected',
        ];
    }
}
