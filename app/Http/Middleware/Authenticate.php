<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    use HttpResponses;
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request)
    {
        return $this::error(null, 'user is unathenticated',  422);
    }
}
