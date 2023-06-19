<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\Subject;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SubjectController extends Controller
{
    public function index()
    {
        return Subject::all();
    } // end method


    public function store(Request $request)
    {
        $validated = $request->validate([
            'class_id' => "required",
            'subject_name' => "required|min:3|unique:subjects",
            'subject_code' => "required"
        ]);

        Subject::insert([
            'class_id' => $request->class_id,
            'subject_name' => $request->subject_name,
            'subject_code' => $request->subject_code,
            'created_at' => Carbon::now()
        ]);

        return response('Data inserted successfully');
    } // end method


    public function edit($id)
    {
        $class = Subject::findOrFail($id);

        return Response()->json($class);
    }


    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'class_id' => "required",
            'subject_name' => "required|min:3|unique:subjects",
            'subject_code' => "required"
        ]);

        Subject::find($id)->update([
            'class_id' => $request->class_id,
            'subject_name' => $request->subject_name,
            'subject_code' => $request->subject_code,
            'updated_at' => Carbon::now()
        ]);


        return response('Data updated successfully');
    }


    public function delete($id)
    {
        Subject::findOrFail($id)->delete();

        return response("Data deleted: $id");
    }
}
