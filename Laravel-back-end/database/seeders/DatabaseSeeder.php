<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Foods\Property;
use Illuminate\Database\Seeder;
use Illuminate\Auth\Events\Validated;
use Database\Seeders\Foods\FoodSeeder;
use Database\Seeders\Users\RolesSeeder;
use Database\Seeders\Users\UsersSeeder;
use Database\Seeders\Orders\OrderSeeder;
use Database\Seeders\Foods\PropertySeeder;
use Database\Seeders\Stock\PurchaseSeeder;
use Database\Seeders\Foods\FoodGroupSeeder;
use Database\Seeders\Foods\VariationSeeder;
use Database\Seeders\Restaurant\BranchSeeder;
use Database\Seeders\Foods\PropertyItemsSeeder;
use Database\Seeders\Restaurant\PaymentTypeSeeder;
use Database\Seeders\Restaurant\DepartmentTagSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(BranchSeeder::class);
        $this->call(RolesSeeder::class);
        $this->call(UsersSeeder::class);
        $this->call(DepartmentTagSeeder::class);
        $this->call(PaymentTypeSeeder::class);
        $this->call(VariationSeeder::class);
        $this->call(PropertySeeder::class);
        $this->call(PropertyItemsSeeder::class);
        $this->call(FoodGroupSeeder::class);
        $this->call(FoodSeeder::class);
        $this->call(PurchaseSeeder::class);
        $this->call(OrderSeeder::class);
    }
}
