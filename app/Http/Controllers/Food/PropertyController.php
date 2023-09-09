<?php

namespace App\Http\Controllers\Food;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Foods\Property;
use App\Http\Controllers\Controller;

class PropertyController extends Controller
{
    use HttpResponses;

    // --------create -------
    function post(Request $request)
    {
        $request->validate(['name' => 'required|string']);
        $property = Property::create(["name" => $request->name]);
        return $this::success($property);
    }

    // --------- read ----------
    function get()
    {
        $food_Properties = Property::with("property_items")->get();
        return $this::success($food_Properties);
    }

    // --------update -------
    function put(Request $request)
    {
        $request->validate(['name' => 'required|string' ,'id' => 'required|numeric']);
        $property = Property::where('id', $request->id)->update(['name' => $request->name]);
        if($property) return $this::success($property);
        return $this::error("could not fount resource");
    }
    // ------- delete -----------
    function delete(Request $request) {

        $request->validate(['id' => 'required|numeric']);

        $property = Property::find($request->id);
        if (!$property) return $this::error(null, "Property whih this Id doesn't exist", 404);

        $property->delete();

        return $this::success(null, 'Deleted');
    }
}
