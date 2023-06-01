<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->paginate(5);

        // $categories = DB::table('categories')->latest()->paginate(5);

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

        // ORM
        Category::insert([
            'category_name' => $request->category_name,
            'user_id' => Auth::user()->id,
            'created_at' => Carbon::now()
        ]);


        // QUERY BUILDER
        // $data = [];
        // $data['category_name'] = $request->category_name;
        // $data['user_id'] = Auth::user()->id;
        // $data['created_at'] = Carbon::now();

        // DB::table('categories')->insert($data);

        return Redirect()->back()->with("success", "კატეგორია დამატებულია!");
    }
}
