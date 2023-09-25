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
        Schema::create('order_food', function (Blueprint $table) {
            $table->id();
            $table->foreignId("order_id")->cascadeOnDelete();
            $table->foreignId("food_id")->nullable()->constrained(table : "foods")->nullOnDelete();
            $table->foreignId("variation_id")->nullable()->constrained()->nullOnDelete();
            $table->tinyInteger("quantity");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_food');
    }
};
