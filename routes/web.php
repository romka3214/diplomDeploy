<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EstablishmentController;
use App\Http\Controllers\RecommendationsController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserLKController;
use App\Http\Controllers\DashboardController;

use App\Models\Establishment;
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




Route::middleware('auth')->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::get('/establishments', [EstablishmentController::class, 'index'])->name('establishments');

    Route::post('/establishments/reviewAdd', [EstablishmentController::class, 'addReview'])->name('establishments.review.store');

    Route::put('/establishments/{id}/subscribe', [EstablishmentController::class, 'subscribe'])->name('establishments.subscribe');

    Route::get('/establishments/{id}', [EstablishmentController::class, 'show'])->name('establishments.show');







    Route::get('/events', [EventController::class, 'index'])->name('events');
    Route::get('/events/{id}', [EventController::class, 'show'])->name('events.show');


    Route::get('/recommendations', [RecommendationsController::class, 'index'])->name('recommendations');

    Route::get('/lk', [UserLKController::class, 'index'])->name('profileLK.show');
    Route::delete('/lk/deleteTag/{id}', [UserLKController::class, 'deleteTag'])->name('profileLK.deleteTag');
    Route::post('/lk/addTags', [UserLKController::class, 'addTags'])->name('profileLK.addTags');
    Route::post('/createRequest', [UserLKController::class, 'createRequest'])->name('profile.createRequest');

});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/establishment/editIndex', [DashboardController::class, 'establishmentEditIndex'])->name('dashboard.establishment.editIndex');

    Route::delete('/dashboard/establishment/{estId}/tag/delete/{tagId}', [DashboardController::class, 'establishmentDeleteTag'])->name('dashboard.establishment.deleteTag');
    Route::post('/dashboard/establishment/tag/addTags', [DashboardController::class, 'establishmentAddTags'])->name('dashboard.establishment.addTags');


    Route::post('/dashboard/establishment/edit', [DashboardController::class, 'establishmentEdit'])->name('dashboard.establishment.edit');
    Route::post('/dashboard/tag/create', [DashboardController::class, 'createNewTag'])->name('dashboard.createTag');

    Route::post('/dashboard/establishment/add/photo', [DashboardController::class, 'establishmentAddPhoto'])->name('dashboard.establishment.addPhoto');
    Route::delete('/dashboard/establishment/delete/photo/{id}', [DashboardController::class, 'establishmentDeletePhoto'])->name('dashboard.establishment.deletePhoto');

    Route::get('/dashboard/reviews', [DashboardController::class, 'indexReviews'])->name('dashboard.reviews');
    Route::delete('/dashboard/review/delete/{id}', [DashboardController::class, 'deleteReview'])->name('dashboard.review.delete');


    Route::get('/dashboard/events', [DashboardController::class, 'indexEvents'])->name('dashboard.events');


    Route::get('/dashboard/establishment/{id}/event/create', [DashboardController::class, 'createEventIndex'])->name('dashboard.event.create.index');
    Route::post('/dashboard/event/create', [DashboardController::class, 'createEvent'])->name('dashboard.event.create');

    Route::get('/dashboard/event/add', [DashboardController::class, 'addEvent'])->name('dashboard.event.add');

    Route::get('/dashboard/event/{id}', [DashboardController::class, 'showEvent'])->name('dashboard.event.show');
    Route::get('/dashboard/event/edit/{id}', [DashboardController::class, 'editEventIndex'])->name('dashboard.event.edit.index');
    Route::post('/dashboard/event/edit', [DashboardController::class, 'editEvent'])->name('dashboard.event.edit');

    Route::post('/dashboard/event/add/photo', [DashboardController::class, 'eventAddPhoto'])->name('dashboard.event.addPhoto');
    Route::delete('/dashboard/event/delete/photo/{id}', [DashboardController::class, 'eventDeletePhoto'])->name('dashboard.event.deletePhoto');

    Route::get('/dashboard/event/delete/{id}', [DashboardController::class, 'deleteEvent'])->name('dashboard.event.delete');


    Route::get('/dashboard/photos', [DashboardController::class, 'indexPhotos'])->name('dashboard.photos');
    Route::post('/dashboard/photos/add', [DashboardController::class, 'addPhoto'])->name('dashboard.photo.add');
    Route::post('/dashboard/photos/delete/{id}', [DashboardController::class, 'addPhoto'])->name('dashboard.photo.delete');




    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
