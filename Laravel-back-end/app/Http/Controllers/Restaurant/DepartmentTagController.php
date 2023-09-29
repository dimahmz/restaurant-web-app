<?php

namespace App\Http\Controllers\Restaurant;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Restaurant\DepartmentTag;
use App\Http\Controllers\Controller;


class DepartmentTagController extends Controller
{
    //
    use HttpResponses;

    // --------create -------
    function post(Request $request)
    {
        $request->validate(['name' => 'required|string' , 'commission' => 'required|numeric']);
        $dep_tag = DepartmentTag::create(["name" => $request->name , 'commission' => $request->commission]);
        return $this::success($dep_tag);
    }

    // --------- read ----------
    function get()
    {
        $dep_tag = DepartmentTag::select("id", "name" , "commission")->orderBy('created_at' , 'desc')->get();
        return $this::success($dep_tag);
    }

    // --------update -------
    function put(Request $request)
    {
        $request->validate(['id' => 'required|numeric' , 'name' => 'required|string' , 'commission' => 'required|numeric']);
        $dep_tag = DepartmentTag::where('id', $request->id)->update(['name' => $request->name , 'commission' => $request->commission]);
        return $this::success($dep_tag);
    }
    
    // ------- delete -----------
    function delete(Request $request) {

        $request->validate(['id' => 'required|numeric']);

        $dep_tag = DepartmentTag::find($request->id);
        if (!$dep_tag) return $this::error(null, "Department whih this Id doesn't exist", 404);

        $dep_tag->delete();

        return $this::success(null, 'Deleted');
    }

}

