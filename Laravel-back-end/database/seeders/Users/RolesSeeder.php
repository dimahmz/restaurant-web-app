<?php

namespace Database\Seeders\Users;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->insert([
            [
                'name' => 'Admin',
                'id' => 1
            ],
            [
                'name' => 'Staff',
                'id' => 2
            ],
            [
                'name' => 'Deliveryman',
                'id' => 3
            ],
            [
                'name' => 'Waiter',
                'id' => 4
            ],
            [
                'name' => 'Customer',
                'id' => 5
            ],
        ]);
        //
    }
}
