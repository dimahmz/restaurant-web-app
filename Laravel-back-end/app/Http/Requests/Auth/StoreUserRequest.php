<?php

namespace App\Http\Requests\Auth;

use Illuminate\Validation\Rules;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Traits\HttpResponses;



class StoreUserRequest extends FormRequest
{
    use HttpResponses;

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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'string', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => ['required', 'numeric', 'digits_between:9,15']
        ];
    }
    //  TODO
    // customize the error messages
    // public function messages(){

    // }

    protected function failedValidation(Validator $validator)
    {

        throw new HttpResponseException($this::error(['errors' => $validator->errors()], 'invalid inputs',  422));
    }
}
