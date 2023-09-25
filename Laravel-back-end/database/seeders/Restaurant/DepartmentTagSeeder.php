<?php

namespace Database\Seeders\Restaurant;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('department_tags')->insert([
            [
                'name' => 'DINE IN',
                'commission' => 0
            ],
            [
                'name' => 'CULINARY',
                'commission' => 20
            ],
            [
                'name' => 'PASTRY',
                'commission' => 10
            ],
            [
                'name' => 'GRILL',
                'commission' => 12
            ],
            [
                'name' => 'HSCT',
                'commission' => 7
            ],

        ]);

    }
}
