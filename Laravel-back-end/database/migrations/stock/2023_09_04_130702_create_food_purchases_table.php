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
        Schema::create('food_purchases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('food_id')->constrained(table: "foods")->cascadeOndelete();
            $table->foreignId('purchase_id')->constrained(table: "purchases")->cascadeOndelete();
            $table->integer("quantity");
            $table->decimal("rate", 10, 2);
            $table->decimal("total", 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('food_purchases');
    }
};
