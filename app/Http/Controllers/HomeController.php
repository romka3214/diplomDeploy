<?php

namespace App\Http\Controllers;

use App\Models\Establishment;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{

    public function index()
    {
        $new = Event::query()->
            whereDate('date_start','>', Carbon::today())->
        orderBy('date_start')
            ->with(['photos'])
            ->limit(4)
            ->get();
        $follows = Auth::user()->follows;
        return Inertia::render('Home', [
            'newEstablishments' => $new,
            'follows' => $follows,
        ]);
    }
}
