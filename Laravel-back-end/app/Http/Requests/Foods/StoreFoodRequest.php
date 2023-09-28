<?php

namespace App\Http\Requests\Foods;

use App\Models\Foods\Food;
use App\Traits\HttpResponses;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreFoodRequest extends FormRequest
{
    use HttpResponses;

    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        // max size 4 megabytes
        $size = 4*1024;
        return [
            'food_group_id' => 'required|numeric',
            'name' => 'required|string',
            'price' => 'required|numeric',
            'is_special' => 'required|numeric',
            'varaitions_IDs' => 'array',
            'varaitions_IDs.*.variation_id' => 'required|numeric',
            'varaitions_IDs.*.price' => 'required|numeric',
            'image' => "required|image|mimes:jpeg,png,jpg,gif|max:$size"
        ];
    }
}
