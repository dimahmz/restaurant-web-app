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
        return $this::success($variations , "Variation has been added!");
    }

    // --------- read ----------
    function get()
    {
        $food_Properties = Variation::orderBy('created_at' , 'desc')->get();
        return $this::success($food_Properties);
    }

    // --------update -------
    function put(Request $request, $id)
    {
        $request->validate(['name' => 'required|string']);
        $variations = Variation::where('id', $id)->update(['name' => $request->name]);
        if($variations) return $this::success(null,"variation has been updated!");
        return $this::error(null,"could not fount resource");
    }
    // ------- delete -----------
    function delete($id) {
        $variations = Variation::find($id);

        if (!$variations) return $this::error(null, "Variation whih this Id doesn't exist", 404);

        $variations->delete();

        return $this::success(null, 'Deleted');
    }

}
