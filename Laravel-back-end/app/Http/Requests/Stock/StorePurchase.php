<?php

namespace App\Http\Requests\Stock;

use Illuminate\Foundation\Http\FormRequest;

class StorePurchase extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
        'branch_id' => 'required|numeric',
        'supplier_id' => 'required|numeric',
        'payment_type' => 'required|string',
        'invoice' => 'required|numeric',
        'total' => 'required|numeric',
        'paid' => 'required|numeric',
        'due' => 'required|numeric',
        'food_items' => 'required|array'
        ];
    }
}
