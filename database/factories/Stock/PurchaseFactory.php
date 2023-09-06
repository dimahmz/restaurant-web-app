<?php

namespace Database\Factories\Stock;

use App\Models\Restaurant\Branch;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\stock\Purchase>
 */
class PurchaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "payment_type" => fake()->randomElement(["Cash", "Bank payment"]),
            "type" => "",
            "invoce" => fake()->randomNumber(3),
            "total" =>  fake()->randomFloat($nbMaxDecimals = 2, $min = 4, $max = 1000),
            "paid" => fake()->randomFloat($nbMaxDecimals = 2, $min = 50, $max = 1000),
            "due" => fake()->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 100),
            "branch_id" => Branch::inRandomOrder()->pluck('id')->first(),
            //
        ];
    }
}
