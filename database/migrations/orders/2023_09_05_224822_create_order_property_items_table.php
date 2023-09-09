<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('order_property_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId("order_id")->cascadeOnDelete();
            $table->foreignId("property_item_id")->nullable()->constrained(table: 'property_items')->nullOnDelete();
            $table->tinyInteger("quantity");
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('order_property_items');
    }
};
