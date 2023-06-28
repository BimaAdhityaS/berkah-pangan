<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('relawan', function (Blueprint $table) {
            $table->integer('ID_Relawan', true);
            $table->integer('ID_Tim')->index('Tim');
            $table->char('Nama_Lengkap');
            $table->char('Jenis_Kelamin', 1);
            $table->integer('Umur');
            $table->string('Email', 100);
            $table->integer('Telepon');
            $table->string('Alasan')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('relawan');
    }
};
