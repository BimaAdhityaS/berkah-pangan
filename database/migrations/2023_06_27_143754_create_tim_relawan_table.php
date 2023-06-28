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
        Schema::create('tim_relawan', function (Blueprint $table) {
            $table->integer('ID_Tim', true);
            $table->integer('ID_Individu')->nullable()->index('Individu');
            $table->integer('ID_Restoran')->nullable()->index('Restoran');
            $table->integer('ID_Penerima')->index('Penerima');
            $table->integer('ID_Akun')->index('Akun');
            $table->date('Tggl_Mulai');
            $table->date('Tggl_Selesai');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tim_relawan');
    }
};
