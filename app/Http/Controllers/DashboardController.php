<?php

namespace App\Http\Controllers;

use App\Models\Establishment;
use App\Models\EstablishmentPhoto;
use App\Models\Event;
use App\Models\EventPhotos;
use App\Models\Review;
use App\Models\Tag;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;

class DashboardController extends Controller
{

    public function index()
    {
        return Inertia::render('Dashboard/Dashboard', [
            'establishment' => Establishment::where('user_id', Auth::user()->id)->with('photos')->first(),
        ]);
    }

    public function establishmentEditIndex()
    {

        $establishment = Auth::user()->establishment;
        return Inertia::render('Dashboard/EstablishmentEdit', [
            'establishment' => $establishment
        ]);

    }

    public function establishmentEdit(\Illuminate\Http\Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255|unique:' . Establishment::class,
            'description' => 'required|string',
            'address' => 'required|string|max:255'
        ]);

        Establishment::find(Auth::user()->establishment->id)->update([
            'name' => $request->name,
            'description' =>$request->description,
            'address' => $request->address
        ]);

        return back();

    }

    public function establishmentAddPhoto(\Illuminate\Http\Request $request)
    {

        $request->validate([
            'newPhoto' => 'required|image|mimes:jpeg,jpg,png|max:2048'
        ]);

        $data = EstablishmentPhoto::create([
            'establishment_id' => Auth::user()->establishment->id,
            'url' => $request->file('newPhoto')->store('', 'public'),
        ]);
        return back();

    }

    public function establishmentDeletePhoto($id)
    {
        EstablishmentPhoto::where('id', $id)->delete();
        return back();
    }





    public function indexReviews()
    {
        return Inertia::render('Dashboard/Reviews', [
            'reviews' => Review::where('establishment_id', Auth::user()->establishment->id)
                ->where('published', 1)
                ->with('user')
                ->get(),
        ]);
    }

    public function deleteReview($id)
    {
        Review::where('id', $id)->update([
            'published' => 0,
        ]);
        return back();
    }




    public function indexEvents()
    {
        return Inertia::render('Dashboard/Event/Events', [
            'events' => Auth::user()->establishment->events,
        ]);
    }

    public function showEvent($id)
    {

        $event = Event::with('photos')->find($id);


        return Inertia::render('Dashboard/Event/Show', [
            'event' => $event

        ]);
    }

    public function editEventIndex($id)
    {
        $event = Event::find($id);

        return Inertia::render('Dashboard/Event/Edit', [
            'event' => $event->getRawOriginal()

        ]);
    }

    public function editEvent(\Illuminate\Http\Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|integer',
            'date_start' => 'required|before:date_end',
            'date_end' => 'required|after:date_start'
        ]);

        Event::find($request->id)->update([
            'name' => $request->name,
            'description' =>$request->description,
            'price' => $request->price,
            'date_start' => $request->date_start,
            'date_end' => $request->date_end
        ]);

        return back();

    }

    public function eventAddPhoto(\Illuminate\Http\Request $request)
    {
        $request->validate([
            'id' => 'required',
            'newPhoto' => 'required|image|mimes:jpeg,jpg,png|max:2048'
        ]);

        $data = EventPhotos::create([
            'event_id' => $request->id,
            'url' => $request->file('newPhoto')->store('', 'public'),
        ]);
        return back();

    }

    public function eventDeletePhoto($id)
    {
        EventPhotos::where('id', $id)->delete();
        return back();
    }

    public function createEvent()
    {
//
    }

    public function deleteEvent($id)
    {
        Event::destroy($id);

        return back();
    }


    public function indexPhotos()
    {
        return Inertia::render('Dashboard/Photos', [
            'establishment' => Establishment::where('user_id', Auth::user()->id)->with('photos')->first(),
        ]);
    }

    public function addPhoto()
    {
        return Inertia::render('Dashboard/Photos', [
            'establishment' => Establishment::where('user_id', Auth::user()->id)->with('photos')->first(),
        ]);
    }

    public function deletePhoto()
    {
        return Inertia::render('Dashboard/Photos', [
            'establishment' => Establishment::where('user_id', Auth::user()->id)->with('photos')->first(),
        ]);
    }


    public function indexTags()
    {
        return Inertia::render('Dashboard/Tags', [
            'establishmentTags' => Auth::user()->establishment->tags,
            'tags' => Tag::when(Request::input('query'), function ($query) {
                $query->where('name', 'like', '%' . Request::input('query') . '%');
            })->get()
        ]);
    }

    public function addTag()
    {
        return Inertia::render('Dashboard/Photos', [
            'establishment' => Establishment::where('user_id', Auth::user()->id)->with('photos')->first(),
        ]);
    }

    public function deleteTag()
    {
        return Inertia::render('Dashboard/Photos', [
            'establishment' => Establishment::where('user_id', Auth::user()->id)->with('photos')->first(),
        ]);
    }


}
