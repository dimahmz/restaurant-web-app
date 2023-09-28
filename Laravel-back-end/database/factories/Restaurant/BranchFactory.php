<?php

namespace Database\Factories\Restaurant;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\restaurant\Branch>
 */
class BranchFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->lexify("?????"),
            'phone' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'delivery_charge' => fake()->randomFloat(
                $nbMaxDecimals = 2,
                $min = 0,
                $max = 100
            ),
        ];
    }
}
