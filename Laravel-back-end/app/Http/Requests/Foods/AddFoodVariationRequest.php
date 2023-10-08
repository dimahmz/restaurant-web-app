<?php

namespace App\Http\Requests\Foods;

use App\Models\Foods\Food;
use App\Traits\HttpResponses;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class AddFoodVariationRequest extends FormRequest
{
    use HttpResponses;

    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'varaitions_IDs' => 'array',
            'varaitions_IDs.*.variation_id' => 'required|numeric',
            'varaitions_IDs.*.price' => 'required|numeric',
        ];
    }
}
