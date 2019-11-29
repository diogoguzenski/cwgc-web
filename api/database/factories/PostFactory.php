<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'content' => $faker->text,
        'type' => $faker->text,
        'meta_key' => $faker->text,
        'comments_status' => $faker->text,
        'status' => $faker->text,
        'post_date' => $faker->dateTime
    ];
});
