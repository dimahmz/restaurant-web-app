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
            $table->foreignId("branch_id")->nullable()->constrained(table: "branches")->nullOnDelete();
            $table->foreignId("variation_id")->nullable()->nullOnDelete();
            $table->foreignId("food_id")->nullable()->constrained(table: "foods")->nullOnDelete();
            $table->foreignId("user_id")->nullable()->nullOnDelete();
            $table->foreignId("table")->nullable()->nullOnDelete();
            $table->tinyInteger("quantity")->default(1);
            $table->string("status")->default("processing");
            $table->string("delivery_address")->nullable();
            $table->string("delivery_time")->default("30 min")->nullable();
            $table->string("delivery_charge")->default("15");
            $table->decimal('subtotal', 10, 2);
            $table->decimal('CGST', 5, 2)->default(5);
            $table->decimal('SGST', 5, 2)->default(5);
            $table->decimal('department_commission', 5, 2)->default(0.00);
            $table->decimal('total_bill', 12, 2)->default(500.00);
            $table->decimal('paid_amount', 12, 2)->default(600.00)->nullable();
            $table->decimal('due_amount', 12, 2)->default(100.00)->nullable();
            $table->boolean('is_online');
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
