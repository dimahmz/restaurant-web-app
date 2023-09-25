<?php

namespace Database\Factories\Restaurant;

use App\Models\Restaurant\Branch;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\restaurant\Table>
 */
class TableFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'capacity' => fake()->numberBetween(5, 13),
            'branch_id' => Branch::factory()
        ];
    }
}
