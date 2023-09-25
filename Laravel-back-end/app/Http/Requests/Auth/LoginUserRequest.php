<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Traits\HttpResponses;

class LoginUserRequest extends FormRequest
{
    use HttpResponses;

    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string', 'min:6']
        ];
    }

    protected function failedValidation(Validator $validator): void
    {

        throw new HttpResponseException($this::error(['errors' => $validator->errors()], 'inputs are valid',  422));
    }
}
