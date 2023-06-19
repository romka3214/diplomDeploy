<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Tag;
use App\Models\UserTag;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;


class UserLKController extends Controller
{

    public function index(){
        $tags = Tag::when(\Illuminate\Support\Facades\Request::input('searchTags'), function ($query) {
            $query->where('name', 'like', '%' . \Illuminate\Support\Facades\Request::input('searchTags') . '%');
        })->get();
        return Inertia::render('ProfileLK/Show', [
            'status' => session('status'),
            'tags' => fn() => $tags,
            'userTags'=> Auth::user()->tags,
        ]);
    }

    public function deleteTag($id){
        UserTag::where('user_id', Auth::user()->id)->where('tag_id', $id)->delete();
        return back();
    }

    public function addTags(Request $request){


        foreach ($request->ids as $key => $id){
            UserTag::query()->updateOrCreate(
                ['user_id' => Auth::user()->id, 'tag_id'=> $id],
                ['user_id'=> Auth::user()->id, 'tag_id'=> $id, 'interest_count' => 0]
            );
        }


        return back();
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profileLK.show');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
