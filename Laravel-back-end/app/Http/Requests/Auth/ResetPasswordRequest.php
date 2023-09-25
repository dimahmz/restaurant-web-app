<?php

namespace App\Http\Requests\Auth;

use App\Traits\HttpResponses;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ResetPasswordRequest extends FormRequest
{
    use HttpResponses;
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ];
    }

    protected function failedValidation(Validator $validator): void
    {

        throw new HttpResponseException($this::error(['errors' => $validator->errors()], 'inputs are valid',  422));
    }
}
