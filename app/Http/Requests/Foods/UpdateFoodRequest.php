<?php

namespace App\Http\Requests\Foods;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateFoodRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'id' => 'required|numeric',
            'food_group_id' => 'required|numeric',
            'name' => 'required|string',
            'price' => 'required|numeric',
            'is_special' => 'required|numeric'

        ];
    }
    // protected function failedValidation(Validator $validator): void
    // {

    //     throw new HttpResponseException($this::error(['errors' => $validator->errors()], 'invalid inputs',  422));
    // }
}
