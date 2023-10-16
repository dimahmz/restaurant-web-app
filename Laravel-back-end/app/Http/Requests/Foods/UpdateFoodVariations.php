<?php

namespace App\Http\Requests\Foods;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFoodVariations extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'food_variations' => 'required|array|min:1',
            'food_variations.*.variation_id' => 'required|numeric',
            'food_variations.*.price' => 'required|numeric',
            'food_variations.*.food_id' => 'required|numeric',
        ];
    }
}
