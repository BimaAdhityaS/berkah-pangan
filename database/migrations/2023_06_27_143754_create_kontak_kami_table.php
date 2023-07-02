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
        Schema::create('kontak_kami', function (Blueprint $table) {
            $table->integer('ID_Kontak', true);
            $table->string('Nama', 100);
            $table->string('Email', 100)->nullable();
            $table->string('Telepon',100)->nullable();
            $table->string('Pesan')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kontak_kami');
    }
};
