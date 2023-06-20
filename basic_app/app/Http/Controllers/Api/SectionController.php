<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Section;
use Carbon\Carbon;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index()
    {
        return Section::all();
    }

    public function add(Request $request)
    {
        $validated = $request->validate([
            'section_name' => 'required|min:5',
            'price' => 'required'
        ]);

        Section::insert([
            'section_name' => $request->section_name,
            'price' => $request->price,
            'created_at' => Carbon::now()
        ]);

        return Response()->json(['success' => true]);
    }


    public function delete($id)
    {
        Section::findOrFail($id)->delete($id);

        return Response()->json(['success' => true]);
    }


    public function edit(Request $request, $id)
    {
        $validated = $request->validate([
            'section_name' => 'required|min:5',
            'price' => 'required'
        ]);

        Section::find($id)->update([
            'section_name' => $request->section_name,
            'class_id' => $request->class_id,
            'price' => $request->price,
            'updated_at' => Carbon::now()
        ]);

        return Response()->json(['success' => true]);
    }

    public function sections()
    {
        $sections = Section::all();

        return view('sections', [
            'sections' => $sections
        ]);
    }
}
