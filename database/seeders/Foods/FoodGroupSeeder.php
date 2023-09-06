<?php

namespace Database\Seeders\Foods;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FoodGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('food_groups')->insert(
            [
                ["name" => "SEASONAL FRUIT JUICES",],
                ["name" => "DRY FRUIT MILKSHAKES",],
                ["name" => "SEASONAL MILKSHAKES",],
                ["name" => "FRUIT CREAMm",],
                ["name" => "FRIES",],
                ["name" => "PIZZA",],
                ["name" => "Burger",],
                ["name" => "Milk shakes group",],
                ["name" => "Coffee",],
                ["name" => "Mojito",],
                ["name" => "Tacos",],
                ["name" => "sharma",],
                ["name" => "Punjabi",],
                ["name" => "BEER",],
                ["name" => "DRINKS",],
            ]
        );
    }
}
