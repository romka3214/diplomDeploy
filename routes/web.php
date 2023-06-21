<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EstablishmentController;
use App\Http\Controllers\RecommendationsController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserLKController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AdminController;

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

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});

Route::middleware(['auth','isOwner'])->group(function () {
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





});



Route::middleware(['auth','isAdmin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');


    Route::get('/admin/establishment/create', [AdminController::class, 'establishmentCreateIndex'])->name('admin.establishment.createIndex');
    Route::post('/admin/establishment/create', [AdminController::class, 'establishmentCreate'])->name('admin.establishment.create');

    Route::get('/admin/establishment/{id}', [AdminController::class, 'establishmentIndex'])->name('admin.establishment.index');



    Route::get('/admin/establishment/{id}/editIndex', [AdminController::class, 'establishmentEditIndex'])->name('admin.establishment.editIndex');

    Route::delete('/admin/establishment/delete/{id}', [AdminController::class, 'establishmentDelete'])->name('admin.establishment.delete');

    Route::post('/admin/establishment/edit', [AdminController::class, 'establishmentEdit'])->name('admin.establishment.edit');

    Route::delete('/admin/establishment/{estId}/tag/delete/{tagId}', [AdminController::class, 'establishmentDeleteTag'])->name('admin.establishment.deleteTag');
    Route::post('/admin/establishment/tag/addTags', [AdminController::class, 'establishmentAddTags'])->name('admin.establishment.addTags');



    Route::post('/admin/tag/create', [AdminController::class, 'createNewTag'])->name('admin.createTag');

    Route::post('/admin/establishment/add/photo', [AdminController::class, 'establishmentAddPhoto'])->name('admin.establishment.addPhoto');
    Route::delete('/admin/establishment/delete/photo/{id}', [AdminController::class, 'establishmentDeletePhoto'])->name('admin.establishment.deletePhoto');

    Route::get('/admin/reviews', [AdminController::class, 'indexReviews'])->name('admin.reviews');

    Route::get('/admin/review/confirm/{id}', [AdminController::class, 'confirmReview'])->name('admin.review.confirm');

    Route::delete('/admin/review/delete/{id}', [AdminController::class, 'deleteReview'])->name('admin.review.delete');


    Route::get('/admin/events', [AdminController::class, 'indexEvents'])->name('admin.events');


    Route::get('/admin/establishment/{id}/event/create', [AdminController::class, 'createEventIndex'])->name('admin.event.create.index');
    Route::post('/admin/event/create', [AdminController::class, 'createEvent'])->name('admin.event.create');

    Route::get('/admin/event/add', [AdminController::class, 'addEvent'])->name('admin.event.add');

    Route::get('/admin/event/{ids}', [AdminController::class, 'showEvent'])->name('admin.event.show');
    Route::get('/admin/event/edit/{ids}', [AdminController::class, 'editEventIndex'])->name('admin.event.edit.index');
    Route::post('/admin/event/edit', [AdminController::class, 'editEvent'])->name('admin.event.edit');

    Route::post('/admin/event/add/photo', [AdminController::class, 'eventAddPhoto'])->name('admin.event.addPhoto');
    Route::delete('/admin/event/delete/photo/{id}', [AdminController::class, 'eventDeletePhoto'])->name('admin.event.deletePhoto');

    Route::delete('/admin/event/delete/{id}', [AdminController::class, 'deleteEvent'])->name('admin.event.delete');



    Route::get('/admin/photos', [AdminController::class, 'indexPhotos'])->name('admin.photos');
    Route::post('/admin/photos/add', [AdminController::class, 'addPhoto'])->name('admin.photo.add');
    Route::post('/admin/photos/delete/{id}', [AdminController::class, 'addPhoto'])->name('admin.photo.delete');


    Route::get('/admin/requests', [AdminController::class, 'indexRequests'])->name('admin.indexRequests');
    Route::delete('/admin/request/delete/{id}', [AdminController::class, 'deleteRequests'])->name('admin.deleteRequest');



});

require __DIR__ . '/auth.php';
