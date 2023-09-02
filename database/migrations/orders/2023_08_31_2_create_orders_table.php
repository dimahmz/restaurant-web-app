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
            $table->foreignId("ordered_item_id")->constrained(table: "ordred_items");
            $table->string("status");
            $table->string("received_by");
            $table->string("customer");
            $table->string("branch");
            $table->tinyInteger("table");
            $table->string("waiter");
            $table->decimal('subtotal', 10, 2);
            $table->decimal('CGST', 7, 2);
            $table->decimal('SGST', 7, 2);
            $table->decimal('servide_charge', 5, 2);
            $table->decimal('discount', 10, 2);
            $table->decimal('department_commission', 5, 2);
            $table->decimal('total_bill', 10, 2);
            $table->decimal('paid_amount', 10, 2);
            $table->decimal('due_amount', 10, 2);
            $table->boolean('is_online')->default(true);
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
