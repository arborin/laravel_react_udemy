<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Brand;
use App\Models\Multipic;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Redirect;

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

        // Image::make($brand_img)->resize(300, 200)->save("image/brand/$name_gen");

        // $last_img = "image/brand/$name_gen";

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


    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'brand_name' => 'required|min:4',
        ]);

        $old_image = $request->old_image;
        $id = $request->id;

        $brand_img = $request->file('brand_img');


        $name_gen = hexdec(uniqid());
        $img_ext = strtolower($brand_img->getClientOriginalExtension());
        $image_name = "$name_gen.$img_ext";
        $up_location = 'image/brand/';

        $last_img = $up_location . $image_name;
        $brand_img->move($up_location, $image_name);
        // dd($request);

        if ($old_image) {
            unlink($old_image);
        }

        Brand::find($id)->update([
            'brand_name' => $request->brand_name,
            'brand_img' => $last_img,
            'created_at' => Carbon::now()
        ]);

        return Redirect()->route('all.brand')->with("success", "brand inserted!");
    }

    public function delete($id)
    {
        $image = Brand::find($id);

        $old_img = $image->brand_img;

        if ($old_img) {
            unlink($old_img);
        }


        Brand::find($id)->delete();
        return Redirect()->back()->with('success', "brand deleted!");
    }


    public function multipic()
    {
        $images = Multipic::all();
        return view('multipic.index', compact('images'));
    }

    public function storeImages(Request $request)
    {
        dd($request->brand_img);
    }
}
