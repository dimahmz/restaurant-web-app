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
            $table->foreignId("order_id");
            $table->foreignId("property_item_id")->constrained(table: 'property_items');
            $table->tinyInteger("quantity")->default(1);
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('order_property_items');
    }
};
