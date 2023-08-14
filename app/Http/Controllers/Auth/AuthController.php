<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Traits\HttpResponses;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Auth\StoreUserRequest;
use App\Http\Requests\Auth\LoginUserRequest;

class AuthController extends Controller
{
    use HttpResponses;
    public function login(LoginUserRequest $request)
    {
        $credentials = ['email', 'password'];

        if (!Auth::attempt($request->only($credentials)))
            return HttpResponses::error("name or email is incorrect", 'error while trying to log in', 401);

        $user = User::where('email', $request->email)->first();

        $token = $user->createToken('login-user token ')->plainTextToken;

        return HttpResponses::success(['user' => $user, 'token' => $token], 'log in successfully');
    }

    // StoreUserRequest $request
    public  function register(StoreUserRequest $request)
    {
        $request->validated($request->only(['name', 'email', 'password', 'phone']));
        // create a new user 
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone
        ]);

        return HttpResponses::success(['user' => $user], 'Account Has been created succesfully');
    }
    function logout()
    {
        Auth::logout();
        // user()->currentAccessToken()->delete();
        return HttpResponses::success([], 'user has been logged out');
    }
}
