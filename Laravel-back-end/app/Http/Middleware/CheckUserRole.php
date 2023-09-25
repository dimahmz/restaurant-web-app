<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User\Role;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserRole
{
    use HttpResponses;
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {


        $userRoleId = Auth::user()->role_id;

        $roleName = Role::where("id", $userRoleId)->value("name");

        if ($roleName === "Costumer") return $this::error(null, 'Unauthorized', 403);

        // \Illuminate\Support\Facades\Log::info([$roleName, $role]);

        if ($roleName === $role) return $next($request);

        return $this::error(null, 'Unauthorized', 403);
    }
}
