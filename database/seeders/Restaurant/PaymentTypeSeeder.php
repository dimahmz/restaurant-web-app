<?php

namespace Database\Seeders\Restaurant;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PaymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('payment_types')->insert([
            [
                'name' => 'COD',
                'unique_key' => 'cash',
                'id' => 1
            ],
            [
                'name' => 'Cash Pos',
                'unique_key' => 'cash-pos',
                'id' => 2
            ],
            [
                'name' => 'GCASH',
                'unique_key' => 'bank-payment',
                'id' => 3
            ],
        ]);
    }
}
