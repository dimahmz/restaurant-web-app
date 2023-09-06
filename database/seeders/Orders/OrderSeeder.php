<?php

namespace Database\Seeders\Orders;

use App\Models\Orders\Order;
use Illuminate\Database\Seeder;
use App\Models\Foods\PropertyItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Nette\Utils\Random;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $property_items = PropertyItem::inRandomOrder()->first();
        Order::factory()->hasAttached(
            $property_items,
            [
                "quantity" => fake()->randomElement([1, 2, 3, 4]),
            ],
            'property_items'
        )->count(5)->create();
    }
}
