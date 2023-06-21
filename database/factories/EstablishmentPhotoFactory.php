<?php

namespace Database\Factories;

use App\Models\Establishment;
use App\Models\EstablishmentPhoto;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Establishment_photo>
 */
class EstablishmentPhotoFactory extends Factory
{


    protected $model = EstablishmentPhoto::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
//        $fileName = $this->faker->image(storage_path('app/public'), fullpath:false, height:640, width: 480, word:['pub']);
        return [
            'url' => $this->faker->image(dir: storage_path('app/public'), width: 640, height: 480, fullPath: false),
        ];
    }
}
