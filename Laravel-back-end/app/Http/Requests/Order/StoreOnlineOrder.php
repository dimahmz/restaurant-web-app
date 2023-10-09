<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;

class StoreOnlineOrder extends FormRequest
{
    
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'branch_id' => 'required|numeric',
            'food_id' => 'required|numeric',
            'costumer_id' => 'required|numeric',
            'quantity'=> 'required|numeric',
            'delivery_address' => 'required|string',
            'subtotal' => 'required|numeric',
            'total_bill' => 'required|numeric',
        ];
        
    }
    public function messages(): array{
        return [
            'branch_id.*' => 'You must select a branch',
            "delivery_address.*"  => 'Add an address to the delivery man'
        ];
    }

}
