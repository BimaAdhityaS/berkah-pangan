<?php

use App\Http\Controllers\BerkahpanganController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    return Inertia::render('Homepage', [
        'title' => 'Beranda',
    ]);
})->name('homepage');

Route::get('/latarbelakang', function(){
    return Inertia::render('TentangKami_LatarBelakang', [
        'title' => 'Latar Belakang',
    ]);
})->name('tentangkami-latarbelakang');

Route::get('/visidanmisi', function(){
    return Inertia::render('TentangKami_Visi&Misi', [
        'title' => 'Visi dan Misi',
    ]);
})->name('tentangkami-visimisi');

Route::get('/FaQ', function(){
    return Inertia::render('TentangKami_Faq', [
        'title' => 'Frequently Asked Question',
    ]);
})->name('tentangkami-FaQ');

Route::get('/donasi', function(){
    return Inertia::render('Donasi', [
        'title' => 'Donasi',
    ]);
})->name('donasi');

Route::get('/donasimakanan', function(){
    return Inertia::render('Donasi_Makanan', [
        'title' => 'Donasi Makanan',
    ]);
})->name('makanan');

Route::get('/penerima', function(){
    return Inertia::render('Usul_Penerima', [
        'title' => 'Usul Penerima',
    ]);
})->name('penerima');

Route::get('/relawan', function(){
    return Inertia::render('Relawan', [
        'title' => 'Relawan',
    ]);
})->name('relawan');

Route::get('/kontakkami', function(){
    return Inertia::render('Kontak_Kami', [
        'title' => 'Relawan',
    ]);
})->name('kontakkami');

Route::post('/individu', [BerkahpanganController::class,'store']);
Route::post('/restoran', [BerkahpanganController::class,'store']);
Route::post('/penerima', [BerkahpanganController::class,'store']);

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
