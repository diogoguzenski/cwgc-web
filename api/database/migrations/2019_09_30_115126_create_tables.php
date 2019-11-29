<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('user_level');
            $table->rememberToken();
            $table->timestamps();
        });
        Schema::create('Posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->text('content')->nullable();
            $table->string('type')->nullable();
            $table->string('excerpt')->nullable();
            $table->string('comments_status')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('Postmetas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('post_id');
            $table->foreign('post_id')-> references('id')->on('Posts');
            $table->string('metakey');
            $table->string('metavalue');
            $table->timestamps();
        });
        Schema::create('Comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('post_id');
            $table->foreign('post_id')-> references('id')->on('Posts');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')-> references('id')->on('Users');
            $table->string('content');
            $table->timestamps();
        });
        Schema::create('Options', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('option');
            $table->string('option_value');
            $table->timestamps();
        });
        Schema::create('Funnels', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
        Schema::create('Funnel_levels', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('status');
            $table->unsignedBigInteger('funnel_id');
            $table->foreign('funnel_id')-> references('id')->on('Funnels');
            $table->timestamps();
        });
        Schema::create('Leads', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('city')->nullable();
            $table->string('address')->nullable();
            $table->string('status')->nullable();
            $table->string('origin')->nullable();
            $table->string('comments')->nullable();
            $table->unsignedBigInteger('funnel_level_id')->nullable();
            $table->foreign('funnel_level_id')-> references('id')->on('Funnel_levels');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Leads');
        Schema::dropIfExists('Funnel_levels');
        Schema::dropIfExists('Funnels');
        Schema::dropIfExists('Options');
        Schema::dropIfExists('Comments');
        Schema::dropIfExists('Postmeta');
        Schema::dropIfExists('Posts');
        Schema::dropIfExists('Users');
    }
}
