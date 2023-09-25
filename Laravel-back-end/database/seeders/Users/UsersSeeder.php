<?php

namespace Database\Seeders\Users;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert(
            [
                [
                    'name' => 'Admin',
                    'email' => 'iamanadmin@example.com',
                    'password' => Hash::make('admin1234'),
                    'role_id' => 1,
                ],
                [
                    'name' => 'DeliveryMan',
                    'email' => 'deliveryman@example.com',
                    'password' => Hash::make('deliveryman1234'),
                    'role_id' => 3,
                ],
                [
                    'name' => 'Staff',
                    'email' => 'staff@example.com',
                    'password' => Hash::make('staff1234'),
                    'role_id' => 2,
                ],

            ]

        );
    }
}
