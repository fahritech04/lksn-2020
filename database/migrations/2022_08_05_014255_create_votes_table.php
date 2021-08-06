<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('votes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('choice_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('poll_id');
            $table->timestamps();
            $table->unsignedBigInteger('division_id');
            //  foreign
            $table->foreign('division_id')->references('id')->on('divisions')->onDeleted('restrict');
            $table->foreign('poll_id')->references('id')->on('polls')->onDeleted('restrict');
            $table->foreign('user_id')->references('id')->on('users')->onDeleted('restrict');
            $table->foreign('choice_id')->references('id')->on('choices')->onDeleted('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('votes');
    }
}
