<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared('CREATE TRIGGER purchase_trigger 
            AFTER INSERT ON food_purchases FOR EACH ROW
            BEGIN
                UPDATE foods SET in_stock = in_stock + NEW.quantity WHERE id = NEW.food_id;
            END;
        ');

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('DROP TRIGGER IF EXISTS purchase_trigger');
    }
};
