<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Requests\Restaurant\StoreTable;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Restaurant\Table;
use App\Http\Controllers\Controller;



class TableController extends Controller
{
    //
    use HttpResponses;

    // --------create -------
    function post(StoreTable $request)
    {
        $table = Table::create(["name" => $request->name , 'capacity' => $request->capacity, "branch_id"=> $request->branch_id]);
        return $this::success($table, "Table has been added!");
    }

    // --------- read ----------
    function get()
    {
        $table = Table::orderBy('created_at' , 'desc')->get();
        return $this::success($table);
    }
    function get_with_branch(){
        $table = Table::with('branch')->orderBy('created_at' , 'desc')->get();
        return $this::success($table);

    }

    // --------update -------
    function put(StoreTable $request, $id)
    {
        $table = Table::where('id', $id)->update(["name" => $request->name , 'capacity' => $request->capacity, "branch_id"=> $request->branch_id]);
        if(!$table) return $this::error(null,"table doesn't exist!");
        return $this::success($table , "Table has been updated!");
    }
    
    // ------- delete -----------
    function delete($id) {

        $table = Table::find($id);

        if (!$table) return $this::error(null, "Table whih this Id doesn't exist", 404);
        $table->delete();

        return $this::success(null, 'Deleted!');
    }

}
