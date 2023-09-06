<?php

namespace Database\Factories\Restaurant;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\restaurant\DepartmentTag>
 */
class DepartmentTagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->title(),
            'commission' => fake()->randomFloat(
                $nbMaxDecimals = 3,
                $min = 0,
                $max = 100
            ),

        ];
    }
}
