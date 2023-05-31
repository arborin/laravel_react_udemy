<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    // use HasFactory;
    use SoftDeletes;
<<<<<<< HEAD
    protected $fillable = ['user_id', 'category_name'];
=======

    protected $fillable = [
        'user_id',
        'name'
    ];
>>>>>>> ab7252750e04cca414bfb2b87ec13b23f80c82f9
}
