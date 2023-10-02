<?php

namespace App\Http\Controllers\Food;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Foods\FoodGroup;
use App\Traits\HttpResponses;


class FoodGroupController extends Controller
{
    use HttpResponses;
    // --------create -------
    function post(Request $request)
    {
        $request->validate(['name' => 'required|string']);
        $food_group = FoodGroup::create(["name" => $request->name]);
        return $this::success($food_group , "Food goup has been added");
    }
    // --------- read ----------
    function get()
    {
        $food_groups = FoodGroup::select("id", "name")->get();
        return $this::success($food_groups);
    }

    // --------update -------
    function put(Request $request)
    {
        $request->validate(['name' => 'required|string' ,'id' => 'required|numeric']);
        $food_group = FoodGroup::where('id', $request->id)->update(['name' => $request->name]);
        return $this::success($food_group);
    }
    // ------- delete -----------
    function delete(Request $request) {

        $request->validate(['id' => 'required|numeric']);

        $food_group = FoodGroup::find($request->id);
        if (!$food_group) return $this::error(null, "Group whih this Id doesn't exist", 404);

        $food_group->delete();

        return $this::success(null, 'Group has been deleted');
    }

}