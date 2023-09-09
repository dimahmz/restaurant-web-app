<?php

namespace App\Exceptions;

use Throwable;
use App\Traits\HttpResponses;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
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

    public function render($request, Throwable $exception)
    {
        if ($exception instanceof ValidationException) {
            // Handle validation exceptions as JSON responses
            return $this::error(
                $exception->validator->errors(),
                'input errors',
                422
            );
        }
        if ($exception instanceof OutOfStockException) {
            return $this::error(
                null,
                'food is out of stock',
                404
            );
        }

        return parent::render($request, $exception);
    }


    // Add more exception handling logic as needed for your JSON API

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
