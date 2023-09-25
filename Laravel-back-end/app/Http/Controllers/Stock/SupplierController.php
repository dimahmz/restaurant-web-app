<?php

namespace App\Http\Controllers\Stock;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Stock\Supplier;
use App\Http\Controllers\Controller;
use App\Http\Requests\Stock\StoreSupplier;

class SupplierController extends Controller
{
    

    use HttpResponses;

    // --------create -------
    function post(StoreSupplier $request)
    {
        $supplier = Supplier::create([
            "name" => $request->name,
            "email" => $request->email,
            "address" => $request->address,
        ]);
        return $this::success($supplier);
    }

    // --------- read ----------
    function get()
    {
        $food_Properties = Supplier::all();
        return $this::success($food_Properties);
    }

    // --------update -------
    function put(StoreSupplier $request)
    {
        $request->validate(['id' => 'required|numeric']);
        $supplier = Supplier::where('id', $request->id)->update([
            "name" => $request->name,
            "email" => $request->email,
            "address" => $request->address,
        ]);
        if($supplier) return $this::success("updated successfully");
        return $this::error("could not fount resource");
    }
    // ------- delete -----------
    function delete(Request $request) {

        $request->validate(['id' => 'required|numeric']);

        $supplier = Supplier::find($request->id);
        if (!$supplier) return $this::error(null, "Supplier whih this Id doesn't exist", 404);

        $supplier->delete();

        return $this::success(null, 'Deleted');
    }

}
