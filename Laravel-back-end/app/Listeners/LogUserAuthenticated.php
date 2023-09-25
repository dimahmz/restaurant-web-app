<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class LogUserAuthenticated
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    // TODO : Make somthing when a user has logged in
    public function handle(Login $event): void
    {
        $user = $event->user;
        // Log::info('a new User has been authenticated', [$user]);
        //
    }
}
