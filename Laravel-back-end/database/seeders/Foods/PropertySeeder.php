<?php

namespace Database\Seeders\Foods;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('properties')->insert(
            [
                ["name" => "Addons"],
                ["name" => "Spice level"],
                ["name" => "Burger items"],
                ["name" => "salad"]
            ]

        );
    }
}
