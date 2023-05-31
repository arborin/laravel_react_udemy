<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use Illuminate\Http\Request;
=======
use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
>>>>>>> ab7252750e04cca414bfb2b87ec13b23f80c82f9

class CategoryController extends Controller
{
    public function index()
    {
<<<<<<< HEAD
        return view('admin.category.index');
=======
        $categories = Category::all();

        return view('admin.category.index', [
            'categories' => $categories
        ]);
    }

    public function addCategory(Request $request)
    {
        $validatedData = $request->validate(
            [
                'category_name' => 'required|unique:categories'
            ],
            [
                'category_name.required' => "აუცილებელი ველი!"
            ]
        );

        Category::insert([
            'category_name' => $request->category_name,
            'user_id' => Auth::user()->id,
            'created_at' => Carbon::now()
        ]);


        return Redirect()->back()->with("success", "კატეგორია დამატებულია!");
>>>>>>> ab7252750e04cca414bfb2b87ec13b23f80c82f9
    }
}
