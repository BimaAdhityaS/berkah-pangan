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
        Schema::table('tim_relawan', function (Blueprint $table) {
            $table->foreign(['ID_Individu'], 'Individu')->references(['ID_Individu'])->on('individu');
            $table->foreign(['ID_Restoran'], 'Restoran')->references(['ID_Restoran'])->on('restoran');
            $table->foreign(['ID_Akun'], 'Akun')->references(['ID_Akun'])->on('akun');
            $table->foreign(['ID_Penerima'], 'Penerima')->references(['ID_Penerima'])->on('usulan_penerima');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tim_relawan', function (Blueprint $table) {
            $table->dropForeign('Individu');
            $table->dropForeign('Restoran');
            $table->dropForeign('Akun');
            $table->dropForeign('Penerima');
        });
    }
};
