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
        Schema::table('relawan', function (Blueprint $table) {
            $table->foreign(['ID_Tim'], 'Tim')->references(['ID_Tim'])->on('tim_relawan');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('relawan', function (Blueprint $table) {
            $table->dropForeign('Tim');
        });
    }
};
