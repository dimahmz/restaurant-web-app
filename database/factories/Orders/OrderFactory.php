<?php

namespace Database\Factories\Orders;

use App\Models\User\User;
use App\Models\Foods\Food;
use App\Models\Foods\Variation;
use App\Models\Restaurant\Branch;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Orders\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "branch_id" => Branch::inRandomOrder()->first()->id,
            "user_id" => User::inRandomOrder()->first()->id,
            "delivery_address" => fake()->sentence(),
            "subtotal" => fake()->randomFloat(
                $nbMaxDecimals = 2,
                $min = 80,
                $max = 300
            ),
            "CGST" => fake()->randomFloat(
                $nbMaxDecimals = 2,
                $min = 0,
                $max = 10
            ),
            "SGST" => fake()->randomFloat(
                $nbMaxDecimals = 2,
                $min = 0,
                $max = 5,
            ),
            "is_online" => fake()->randomElement([1, 0]),
        ];
    }
}
