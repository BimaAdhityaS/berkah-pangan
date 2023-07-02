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
        Schema::create('usulan_penerima', function (Blueprint $table) {
            $table->integer('ID_Penerima', true);
            $table->string('Nama_Lokasi', 100);
            $table->string('Alamat');
            $table->string('Nama_CP', 100);
            $table->string('Telepon',100);
            $table->string('Email', 100);
            $table->integer('Perkiraan_Jpenerima');
            $table->string('Keterangan')->nullable();
            $table->char('STATUS', 10);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usulan_penerima');
    }
};
