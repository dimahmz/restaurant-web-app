<?php

namespace Database\Seeders\Stock;

use App\Models\Foods\Food;
use App\Models\Stock\Purchase;
use App\Models\Stock\Supplier;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PurchaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Supplier::factory()->has(
        //     Purchase::factory()->hasAttached(Food::factory()->count(1), [
        //         "rate" => fake()->randomFloat($nbMaxDecimals = 2, $min = 4, $max = 100),
        //         "total" => fake()->randomFloat($nbMaxDecimals = 2, $min = 100, $max = 1000),
        //         "quantity" => fake()->randomNumber(3),
        //     ])->count(5),
        //     'purchases'
        // )->count(10)->create();
    }
}
