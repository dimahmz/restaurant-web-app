<?php

namespace Database\Factories\Foods;

use App\Models\Foods\Food;
use App\Models\Foods\Variation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\foods\FoodVariation>
 */
class FoodVariationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            "variation_id" => Variation::factory(),
            "food_id" => Food::factory(),
            "price" => fake()->randomFloat(
                $nbMaxDecimals = 2,
                $min = 5,
                $max = 300
            ),
            //
        ];
    }
}
