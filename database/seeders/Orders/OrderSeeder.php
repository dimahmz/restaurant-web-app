<?php

namespace Database\Seeders\Orders;

use App\Models\Foods\Food;
use App\Models\Orders\Order;
use App\Models\Foods\Variation;
use Illuminate\Database\Seeder;
use App\Models\Foods\PropertyItem;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $property_items = PropertyItem::inRandomOrder()->first();
        $food = Food::inRandomOrder()->first();
        $variation = Variation::inRandomOrder()->first();

        Order::factory()->hasAttached(
            $food,
            [
                "variation_id"=> $variation->id,
                "quantity" => fake()->randomElement([1, 2, 3, 4]),
            ],
        )->count(5)->create();

        DB::table('order_food_items')->insert([
            'order_food_id' => 1,
            'property_item_id' => 1,
            'quantity' => 5,
        ]);
    }
}
