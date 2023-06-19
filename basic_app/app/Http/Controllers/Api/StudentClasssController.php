<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\StudentClass;
use Carbon\Carbon;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;

class StudentClasssController extends Controller
{
    public function index()
    {
        return StudentClass::all();
    } // end method


    public function store(Request $request)
    {
        $validated = $request->validate([
            'class_name' => "required|min:3|unique:student_classes"
        ]);

        StudentClass::insert([
            'class_name' => $request->class_name,
            'created_at' => Carbon::now()
        ]);

        return response('data inserted successfully');
    } // end method


    public function edit($id)
    {
        $class = StudentClass::findOrFail($id);

        return Response()->json($class);
    }


    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'class_name' => "required|min:3|unique:student_classes"
        ]);

        StudentClass::find($id)->update([
            'class_name' => $request->class_name,
            'updated_at' => Carbon::now()
        ]);


        return response('data UPDATED successfully');
    }


    public function delete($id)
    {
        StudentClass::findOrFail($id)->delete();

        return response("STudent $id deleted");
    }
}
