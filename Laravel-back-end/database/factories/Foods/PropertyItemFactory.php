<?php

namespace Database\Factories\Foods;

use App\Models\foods\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\foods\PropertyItems>
 */
class PropertyItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'property_id' => Property::factory(),
            'name' => fake()->name(),
            "price" => fake()->randomFloat(
                $nbMaxDecimals = 2,
                $min = 5,
                $max = 300
            )

        ];
    }
}
