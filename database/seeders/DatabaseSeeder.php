<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use Database\Seeders\Foods\FoodGroupSeeder;
use Database\Seeders\Foods\FoodSeeder;
use Database\Seeders\Orders\OrderSeeder;
use Database\Seeders\Users\RolesSeeder;
use Database\Seeders\Users\UsersSeeder;
use Database\Seeders\Stock\PurchaseSeeder;
use Database\Seeders\Restaurant\BranchSeeder;
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
        $this->call(FoodGroupSeeder::class);
        $this->call(FoodSeeder::class);
        $this->call(PurchaseSeeder::class);
        $this->call(OrderSeeder::class);
    }
}
