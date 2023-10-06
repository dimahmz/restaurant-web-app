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
        return $this::success($branch , "Branch has been created");
    }
    // --------- read ----------
    function get()
    {
        $branch = Branch::orderBy('created_at' , 'desc')->get();
        return $this::success($branch);
    }

    // --------update -------
    function put(StoreBranch $request, $id)
    {

        $branch = Branch::where('id', $id)->update([
            "name" => $request->name,
            'delivery_charge' => $request->delivery_charge,
            'address' => $request->address,
            'phone' => $request->phone,
        ]);
        if (!$branch) return $this::error(null, "Branch whih this ID doesn't exist", 404);

        return $this::success(null, "Branch has been updated!");
    }
    // ------- delete -----------
    function delete($id) {

        $branch = Branch::find($id);
        if (!$branch) return $this::error(null, "Branch whih this Id doesn't exist", 404);

        $branch->delete();

        return $this::success(null, 'Deleted');
    }

}
