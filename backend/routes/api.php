<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
//use App\Http\Controllers\AdminController;


Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

// Register
Route::post('/register', [RegisteredUserController::class, 'store']);

// Login
Route::post('/login', [AuthenticatedSessionController::class, 'store']);

// Logout (ممكن من جوج أماكن)
Route::middleware('auth:sanctum')->post('/logout', [AuthenticatedSessionController::class, 'destroy']);

// Authenticated user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Admin only
//Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
//Route::get('/admin-dashboard', [AdminController::class, 'index']);
//});