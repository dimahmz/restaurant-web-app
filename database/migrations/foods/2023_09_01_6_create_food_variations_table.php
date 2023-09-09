<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('food_variations', function (Blueprint $table) {
            $table->id();
            $table->foreignId("variation_id")->constrained()->cascadeOnDelete();
            $table->foreignId("food_id")->constrained(table: "foods")->cascadeOnDelete();
            $table->decimal("price", 6, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('foods_variations');
    }
};
