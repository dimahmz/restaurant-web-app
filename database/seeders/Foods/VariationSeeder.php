<?php

namespace Database\Seeders\Foods;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class VariationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('variations')->insert(
            [
                ["name" => 'Large'],
                ["name" => 'Medium'],
                ["name" => 'Small'],
                ["name" => '250ml'],
                ["name" => '500ml'],
                ["name" => 'Big'],
                ["name" => 'Half'],
                ["name" => 'Fry'],
                ["name" => 'Chily'],
                ["name" => 'Normal'],
                ["name" => '100g'],
            ]
        );
    }
}
