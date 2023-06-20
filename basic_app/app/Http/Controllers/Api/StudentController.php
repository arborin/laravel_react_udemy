<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use PHPUnit\Framework\MockObject\Builder\Stub;

class StudentController extends Controller
{
    public function index()
    {
        return Student::latest()->get();
    } // end method


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => "required|unique:students",
            'email' => "required|min:3|unique:students"
        ]);

        Student::insert([
            'class_id' => $request->class_id,
            'section_id' => $request->class_id,
            'name' => $request->name,
            'address' => $request->address,
            'email' => $request->email,
            'phone' => $request->phone,
            'photo' => $request->photo,
            'gender' => $request->gender,
            'password' => Hash::make($request->password),
            'created_at' => Carbon::now()
        ]);

        return response('Data inserted successfully');
    } // end method


    public function edit($id)
    {
        $class = Student::findOrFail($id);

        return Response()->json($class);
    }


    public function update(Request $request, $id)
    {

        $validated = $request->validate([
            'name' => "required|unique:students",
            'email' => "required|min:3|unique:students"
        ]);



        Student::find($id)->update([
            'class_id' => $request->class_id,
            'section_id' => $request->class_id,
            'name' => $request->name,
            'address' => $request->address,
            'email' => $request->email,
            'phone' => $request->phone,
            'photo' => $request->photo,
            'gender' => $request->gender,
            'password' => Hash::make($request->password),
            'created_at' => Carbon::now()
        ]);

        return response('Data updated successfully');
    }


    public function delete($id)
    {
        Student::findOrFail($id)->delete();

        return response("Data deleted: $id");
    }
}
