<?php

namespace Database\Seeders\Restaurant;

use Illuminate\Database\Seeder;
use App\Models\Restaurant\Table;
use App\Models\Restaurant\Branch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Branch::factory()->has(Table::factory()->count(5), 'tables')->count(10)->create();
    }
}
