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
        Schema::create('foods', function (Blueprint $table) {
            $table->id();
            $table->foreignId('food_group_id')->constrained(table: 'food_groups')->cascadeOnDelete();
            $table->string("name");
            $table->decimal("price", 8, 2)->nullable()->default(null);
            $table->boolean("is_special")->default(1);
            $table->integer("in_stock")->default(100);
            $table->string("image")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('foods');
    }
};
