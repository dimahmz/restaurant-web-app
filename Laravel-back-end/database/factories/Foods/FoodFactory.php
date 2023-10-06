<?php

namespace Database\Factories\Foods;

use App\Models\Foods\FoodGroup;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Foods\Food>
 */
class FoodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $id = FoodGroup::inRandomOrder()->first()->id;
        return [
            'name' =>  fake()->lexify("???????"),
            'price' => fake()->randomFloat(
                $nbMaxDecimals = 2,
                $min = 0,
                $max = 100
            ),
            'is_special' => 0,
            // "food_group_id" => FoodGroup::factory(),
            "food_group_id" => $id,
            'image' => "images/".fake()->image('storage/app/public/images',640,480, null, false),

            //
        ];
    }
}
