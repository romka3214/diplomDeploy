<?php

namespace App\Http\Controllers;

use App\Models\Establishment;
use App\Models\EstablishmentPhoto;
use App\Models\EstablishmentTag;
use App\Models\Event;
use App\Models\EventPhotos;
use App\Models\Review;
use App\Models\Tag;
use App\Models\User;
use App\Models\UserRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function index()
    {
        return Inertia::render('Admin/Index', [
            'establishments' => Establishment::with(['user'])->get(),
        ]);
    }


    public function establishmentCreateIndex(){

        return Inertia::render('Admin/EstablishmentCreate', [
            'users' => User::all(),
        ]);
    }
    public function establishmentCreate(\Illuminate\Http\Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'address' => 'required|string',
            'user_id' => 'required',
            'photo' => 'required|image|mimes:jpeg,jpg,png|max:2048'
        ]);

        $establishment = Establishment::create([
            'name' => $request->name,
            'description' =>$request->description,
            'address' => $request->address,
            'user_id' => $request->user_id,
        ]);
        $photo = EstablishmentPhoto::create([
            'establishment_id' => $establishment->id,
            'url' => $request->file('photo')->store('', 'public'),
        ]);
        return back();
    }


    public function establishmentIndex($id){
        $tags = Tag::when(\Illuminate\Support\Facades\Request::input('searchTags'), function ($query) {
            $query->where('name', 'like', '%' . \Illuminate\Support\Facades\Request::input('searchTags') . '%');
        })->get();

        return Inertia::render('Admin/Establishment', [
            'establishment' => Establishment::where('id', $id)->with(['photos','tags','events','user'])->first(),
            'tags' => fn() => $tags,
        ]);
    }


    public function establishmentEditIndex($id)
    {

        $establishment = Establishment::with(['user'])->find($id);
        return Inertia::render('Admin/EstablishmentEdit', [
            'establishment' => $establishment,
            'users' => User::all(),
        ]);

    }

    public function establishmentDelete($id){
        Establishment::find($id)->delete();
        return back();
    }

    public function establishmentEdit(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'address' => 'required|string|max:255',
            'user' => 'required'
        ]);

        Establishment::find($request->id)->update([
            'name' => $request->name,
            'description' =>$request->description,
            'address' => $request->address,
            'user_id' => $request->user
        ]);

        return back();

    }

    public function establishmentAddPhoto(Request $request)
    {

        $request->validate([
            'newPhoto' => 'required|image|mimes:jpeg,jpg,png|max:2048'
        ]);

        $data = EstablishmentPhoto::create([
            'establishment_id' => $request->id,
            'url' => $request->file('newPhoto')->store('', 'public'),
        ]);
        return back();

    }

    public function establishmentDeletePhoto($id)
    {
        EstablishmentPhoto::where('id', $id)->delete();
        return back();
    }


    public function establishmentDeleteTag($estId, $tagId){
        EstablishmentTag::where('establishment_id',$estId)->where('tag_id', $tagId)->delete();
        return back();
    }

    public function establishmentAddTags(Request $request){
        foreach ($request->ids as $key => $id){
            EstablishmentTag::query()->updateOrCreate(
                ['establishment_id' => $request->estId, 'tag_id'=> $id],
                ['establishment_id'=> $request->estId, 'tag_id'=> $id, 'popularity_count' => 0]
            );
        }
        return back();
    }

    public function createNewTag(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:' . Tag::class,
        ]);

        Tag::create([
            'name' => $request->name
        ]);

        return back();
    }



    public function indexRequests(){
        return Inertia::render('Admin/Requests', [
            'requests' => UserRequest::with('user')->get(),
        ]);
    }
    public function deleteRequests($id){
        UserRequest::destroy($id);
        return back();
    }




    public function indexReviews()
    {
        return Inertia::render('Admin/Reviews', [
            'reviews' => Review::where('published', 0)
                ->with(['user', 'establishment'])
                ->get(),
        ]);
    }

    public function confirmReview($id)
    {
        Review::find($id)->update([
            'published' => 1
        ]);
        return back();
    }
    public function deleteReview($id)
    {
        Review::destroy($id);
        return back();
    }




    public function indexEvents()
    {
        return Inertia::render('Dashboard/Event/Events', [
            'events' => Auth::user()->establishment->events,
            'establishmentId' => Auth::user()->establishment->id
        ]);
    }

    public function showEvent($ids)
    {

        $array = explode(',', $ids);
        $event = Event::with('photos')->find($array[0]);


        return Inertia::render('Admin/Event/Show', [
            'event' => $event,
            'estid'=> $array[1]

        ]);
    }

    public function editEventIndex($ids)
    {
        $array = explode(',', $ids);
        $event = Event::find($array[0]);

        return Inertia::render('Admin/Event/Edit', [
            'event' => $event->getRawOriginal(),
            'estid' => $array[1],

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

    public function createEventIndex($id)
    {

        return Inertia::render('Admin/Event/Create', [
            'establishmentId' => $id
        ]);
    }

    public function createEvent(\Illuminate\Http\Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|integer',
            'date_start' => 'required|before:date_end',
            'date_end' => 'required|after:date_start',
            'photo' => 'required|image|mimes:jpeg,jpg,png|max:2048'
        ]);

        $event = Event::create([
            'establishment_id' => $request->establishmentId,
            'name' => $request->name,
            'description' =>$request->description,
            'price' => $request->price,
            'date_start' => $request->date_start,
            'date_end' => $request->date_end
        ]);
        $photo = EventPhotos::create([
            'event_id' => $event->id,
            'url' => $request->file('photo')->store('', 'public'),
        ]);
        return back();
    }

    public function deleteEvent($id)
    {
        Event::destroy($id);

        return back();
    }





//    public function indexTags()
//    {
//        return Inertia::render('Dashboard/Tags', [
//            'establishmentTags' => Auth::user()->establishment->tags,
//            'tags' => Tag::when(Request::input('query'), function ($query) {
//                $query->where('name', 'like', '%' . Request::input('query') . '%');
//            })->get()
//        ]);
//    }




}
