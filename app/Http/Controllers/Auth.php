<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Rules\StrongPassword;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;

class Auth extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', new StrongPassword],
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors()->toArray();
            if (isset($errors['name'])) {
                $statusCode = 422;
                $message = 'Name is required.';
            } elseif (isset($errors['email'])) {
                $statusCode = 422;
                $message = 'Email already exists';
            } elseif (isset($errors['password'])) {
                $statusCode = 422;
                $message = 'The password must be at least 6 characters long.';
            } else {
                $statusCode = 400;
                $message = 'Bad Request.';
            }
            return response()->json(['message' => $message, 'errors' => $errors], $statusCode);
        }

        $user = User::create([
            'id' => Str::uuid(),
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(['data' => $user, 'token' => $token], 200);
    }

    public function login(Request $request)
    {

        $validatedData = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        // Create the user
        $user = User::where('email', $validatedData['email'])->first();

        // Log in the user
        $token = JWTAuth::fromUser($user);

        // Authentication successful, return the token
        return response()->json(['data' => $user, 'token' => $token], 200);
    }
}
