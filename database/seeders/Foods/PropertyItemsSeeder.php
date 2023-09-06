<?php

namespace Database\Seeders\Foods;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PropertyItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('property_items')->insert(
            [
                [
                    "property_id" => 1,
                    "name" => "Egg",
                    "price" => 15.00
                ],
                [
                    "property_id" => 1,
                    "name" => "Chesse",
                    "price" => 30.00
                ],
                [
                    "property_id" => 1,
                    "name" => "Roni",
                    "price" => 10.00
                ],
                [
                    "property_id" => 1,
                    "name" => "Tomato",
                    "price" => 12.00
                ],
                [
                    "property_id" => 2,
                    "name" => "Mild",
                    "price" => 0.00
                ],
                [
                    "property_id" => 2,
                    "name" => "Spicy",
                    "price" => 0.00
                ],
                [
                    "property_id" => 2,
                    "name" =>  "Very Spicy",
                    "price" => 0.00
                ],
                [
                    "property_id" => 3,
                    "name" => "Bread 1 piece",
                    "price" => 10.00
                ],
                [
                    "property_id" => 3,
                    "name" => "Cheese 1 fill",
                    "price" => 10.00
                ],
                [
                    "property_id" => 3,
                    "name" =>  "Salad 1 fill",
                    "price" => 5.00
                ],
                [
                    "property_id" => 4,
                    "name" => "Cabbage",
                    "price" => 5.00
                ],
                [
                    "property_id" => 4,
                    "name" => "Carrot",
                    "price" => 5.00
                ],
            ]

        );
    }
}
