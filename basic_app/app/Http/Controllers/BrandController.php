<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        return view('brand.index', [
            'brands' => Brand::latest()->paginate(5)
        ]);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'brand_name' => 'required|unique:brands|min:4',
        ]);



        $brand_img = $request->file('brand_img');


        $name_gen = hexdec(uniqid());
        $img_ext = strtolower($brand_img->getClientOriginalExtension());
        $image_name = "$name_gen.$img_ext";
        $up_location = 'image/brand/';

        $last_img = $up_location . $image_name;
        $brand_img->move($up_location, $image_name);
        // dd($request);


        Brand::insert([
            'brand_name' => $request->brand_name,
            'brand_img' => $last_img,
            'created_at' => Carbon::now()
        ]);

        return Redirect()->back()->with("success", "brand inserted!");
    }


    public function edit($id)
    {
        $brand = Brand::find($id);

        return view("brand.edit", [
            'brand' => $brand
        ]);
    }
}
