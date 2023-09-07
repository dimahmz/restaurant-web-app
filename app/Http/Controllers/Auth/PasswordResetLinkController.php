<?php

namespace App\Http\Controllers\Auth;

use App\Models\User\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\Auth\ResetPasswordRequest;


class PasswordResetLinkController extends Controller
{
    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */

    use HttpResponses;

    // receive an email and send a password reset link to this email
    public function store(Request $request)
    {
        try {

            $request->validate([
                'email' => 'required|email',
            ]);
            $status = Password::sendResetLink(
                $request->only('email')
            );

            // \Illuminate\Support\Facades\Log::info([$status, Password::RESET_LINK_SENT, trans($status)]);

            if ($status == Password::RESET_LINK_SENT) {
                return $this::success(null, trans($status));
            }

            return $this::error(null, trans($status), 422);
        } catch (ValidationException $e) {

            return $this::error(null, $e->errors(), 422);
        }
    }

    // update the user password
    public function update(ResetPasswordRequest $request, $token)
    {
        $data = array_merge(
            ['token' => $token],
            $request->only('email', 'password', 'password_confirmation')
        );
        $status = Password::reset(
            $data,
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();
            }
        );

        return $status === Password::PASSWORD_RESET
            ? $this::success(null, trans($status),)
            : $this::error(null, trans($status), 402);
    }
}
