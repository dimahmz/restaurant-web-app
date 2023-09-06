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
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->string("payment_type");
            $table->string("type");
            $table->integer("invoce");
            $table->decimal("total", 12, 2);
            $table->decimal("paid", 12, 2);
            $table->decimal("due", 12, 2);
            $table->foreignId("supplier_id")->constrained(table: "suppliers");
            $table->foreignId("branch_id")->constrained(table: "branches");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchases');
    }
};
