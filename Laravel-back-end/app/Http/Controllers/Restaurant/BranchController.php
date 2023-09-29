<?php

namespace App\Http\Controllers\Restaurant;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Restaurant\Branch;
use App\Http\Controllers\Controller;
use App\Http\Requests\Restaurant\StoreBranch;

class BranchController extends Controller
{
    //
    use HttpResponses;
    // --------create -------
    function post(StoreBranch $request)
    {
        $branch = Branch::create([
            "name" => $request->name,
            'delivery_charge' => $request->delivery_charge,
            'address' => $request->address,
            'phone' => $request->phone,
        ]);
        return $this::success($branch);
    }
    // --------- read ----------
    function get()
    {
        $branch = Branch::orderBy('created_at' , 'desc')->get();
        return $this::success($branch);
    }

    // --------update -------
    function put(StoreBranch $request)
    {
        $request->validate(['id' => 'required|numeric']);
        $branch = Branch::where('id', $request->id)->update([
            "name" => $request->name,
            'delivery_charge' => $request->delivery_charge,
            'address' => $request->address,
            'phone' => $request->phone,
        ]);
        return $this::success($branch);
    }
    // ------- delete -----------
    function delete(Request $request) {

        $request->validate(['id' => 'required|numeric']);

        $branch = Branch::find($request->id);
        if (!$branch) return $this::error(null, "Branch whih this Id doesn't exist", 404);

        $branch->delete();

        return $this::success(null, 'Deleted');
    }

}
