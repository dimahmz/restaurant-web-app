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
            "user_id" => User::inRandomOrder()->first()->id,
            "branch_id" => Branch::inRandomOrder()->first()->id,
            "customer" => User::inRandomOrder()->first()->id,
            "food_id" => Food::inRandomOrder()->first()->id,
            "variation_id" => Variation::inRandomOrder()->first()->id,
            "delivery_address" => fake()->sentence(),
            "quantity" => rand(1, 5),
            "waiter" => "",
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
