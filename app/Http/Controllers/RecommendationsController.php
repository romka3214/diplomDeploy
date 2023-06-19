<?php

namespace App\Http\Controllers;

use App\Models\Establishment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class RecommendationsController extends Controller
{

    public function index()
    {
        $userFollows = Auth::user()->tags->pluck('id')->toArray();
        $est = Establishment::whereIn('tags.id', $userFollows)
            ->join('establishment_tags', 'establishments.id', '=', 'establishment_tags.establishment_id')
            ->join('tags', 'establishment_tags.tag_id', '=', 'tags.id')
            ->select('establishments.*')
            ->distinct()
            ->with('photos')
            ->get();
        return Inertia::render('Recommendations/Index', [
            'recommendation' => $est
        ]);
    }
}
