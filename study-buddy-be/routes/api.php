<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/users', [AuthController::class, 'users']);
Route::delete('/users/{id}', [AuthController::class, 'destroy']);

Route::middleware('auth:sanctum')->apiResource('tasks', TaskController::class);