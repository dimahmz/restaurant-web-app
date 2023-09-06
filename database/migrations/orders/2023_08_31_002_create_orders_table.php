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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId("branch_id")->constrained(table: "branches");
            $table->foreignId("variation_id")->nullable();
            $table->foreignId("food_id");
            $table->foreignId("user_id");
            $table->tinyInteger("quantity")->default(1);
            $table->string("status")->default("processing");
            $table->string("delivery_address")->nullable();
            $table->string("delivery_time")->default("30 min");
            $table->string("customer");
            $table->tinyInteger("table")->nullable();
            $table->string("waiter")->nullable();
            $table->decimal('subtotal', 10, 2);
            $table->decimal('CGST', 5, 2)->default(5);
            $table->decimal('SGST', 5, 2)->default(5);
            $table->decimal('department_commission', 5, 2)->default(0.00);
            $table->decimal('total_bill', 12, 2)->default(500.00);
            $table->decimal('paid_amount', 12, 2)->default(600.00);
            $table->decimal('due_amount', 12, 2)->default(100.00);
            $table->boolean('is_online')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
