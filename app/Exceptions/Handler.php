<?php

namespace App\Exceptions;

use App\Traits\HttpResponses;
use Throwable;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    use HttpResponses;
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];


    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    // response when a user attempt to athenticate with wrong credentials
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        return   HttpResponses::error(null, $exception->getMessage(), 401);
    }
}
