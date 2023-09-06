<?php

namespace Database\Seeders\Restaurant;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Restaurant\DepartmentTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DepartmentTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DepartmentTag::factory()->count(5)->create();
    }
}
