<?php

namespace Database\Seeders\Foods;

use App\Models\Foods\Food;
use App\Models\Foods\Property;
use App\Models\Foods\Variation;
use Illuminate\Database\Seeder;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Food::factory()->count(4)->create();

        for($i=0 ; $i<15 ; $i++){
            Food::factory()->hasAttached(
                Variation::inRandomOrder()->take(3)->get(),
                ["price" => fake()->randomFloat($nbMaxDecimals = 2, $min = 5, $max = 300),]
            )->hasAttached(
                Property::inRandomOrder()->take(2)->get()
            )->create();
        }

    }
}



// Readabale Data
// DB::table("foods")->insert([
//     [
//         "name" => "Pizza Rida",
//         "food_group_id" => 6,
//         "price" => 15.00,
//         "is_special" => 1
//     ],
//     [
//         "name" => "Americano",
//         "food_group_id" => 9,
//         "price" => 30.00,
//         "is_special" => 1

//     ],
//     [
//         "name" => "Sour Cocktail",
//         "food_group_id" => 1,
//         "price" => 10.00,
//         "is_special" => 1

//     ],
//     [
//         "name" => "Chicken Shamrma",
//         "food_group_id" => 12,
//         "price" => 12.00,
//         "is_special" => 1

//     ]

// ]);
