<?php

namespace App\Http\Controllers\Restaurant;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Restaurant\Table;
use App\Http\Controllers\Controller;

class TableController extends Controller
{
    //
    use HttpResponses;

    // --------create -------
    function post(Request $request)
    {
        $table = Table::create(["name" => $request->name , 'commission' => $request->commission]);
        return $this::success($table);
    }

    // --------- read ----------
    function get()
    {
        $table = Table::select("id", "name" , "commission")->get();
        return $this::success($table);
    }

    // --------update -------
    function put(Request $request)
    {
        $request->validate(['id' => 'required|numeric' ]);
        $table = Table::where('id', $request->id)->update(['name' => $request->name , 'commission' => $request->commission]);
        return $this::success($table);
    }
    
    // ------- delete -----------
    function delete(Request $request) {

        $request->validate(['id' => 'required|numeric']);

        $table = Table::find($request->id);
        if (!$table) return $this::error(null, "Department whih this Id doesn't exist", 404);

        $table->delete();

        return $this::success(null, 'Deleted');
    }

}
