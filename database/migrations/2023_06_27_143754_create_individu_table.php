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
        Schema::create('individu', function (Blueprint $table) {
            $table->integer('ID_Individu', true);
            $table->string('Nama_Lengkap', 100);
            $table->string('Alamat');
            $table->integer('Telepon');
            $table->string('Email', 100);
            $table->string('Jenis_Makanan', 100);
            $table->date('EXP_Date');
            $table->integer('Jumlah_Porsi');
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
        Schema::dropIfExists('individu');
    }
};
