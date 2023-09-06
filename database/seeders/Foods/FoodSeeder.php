<?php

namespace Database\Seeders\Foods;

use App\Models\Foods\Food;
use App\Models\Foods\Property;
use App\Models\Foods\Variation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Foods\PropertyItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Food::factory()->hasAttached(
            Variation::factory()->count(2),
            ["price" => fake()->randomFloat($nbMaxDecimals = 2, $min = 5, $max = 300),]
        )->has(
            Property::factory()->has(PropertyItem::factory()->count(5), 'property_items')
        )->count(10)->create();
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
