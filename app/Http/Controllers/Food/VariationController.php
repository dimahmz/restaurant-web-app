<?php

namespace App\Http\Controllers\Food;

use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use App\Models\Foods\Variation;
use App\Http\Controllers\Controller;

class VariationController extends Controller
{
    use HttpResponses;

    // --------create -------
    function post(Request $request)
    {
        $request->validate(['name' => 'required|string']);
        $variations = Variation::create(["name" => $request->name]);
        return $this::success($variations);
    }

    // --------- read ----------
    function get()
    {
        $food_Properties = Variation::all();
        return $this::success($food_Properties);
    }

    // --------update -------
    function put(Request $request)
    {
        $request->validate(['name' => 'required|string' ,'id' => 'required|numeric']);
        $variations = Variation::where('id', $request->id)->update(['name' => $request->name]);
        if($variations) return $this::success($variations);
        return $this::error("could not fount resource");
    }
    // ------- delete -----------
    function delete(Request $request) {

        $request->validate(['id' => 'required|numeric']);

        $variations = Variation::find($request->id);
        if (!$variations) return $this::error(null, "Variation whih this Id doesn't exist", 404);

        $variations->delete();

        return $this::success(null, 'Deleted');
    }

}
