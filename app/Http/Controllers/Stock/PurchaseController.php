<?php

namespace App\Http\Controllers\Stock;

use App\Models\Foods\Food;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Stock\Purchase;
use App\Http\Controllers\Controller;
use App\Http\Requests\Stock\StorePurchase;

class PurchaseController extends Controller
{
    use HttpResponses;


    // ------- Create ----------
    function post(StorePurchase $request){
        $purchase = Purchase::create([
            'branch_id' => $request->branch_id,
            'supplier_id' => $request->supplier_id,
            'payment_type'=> $request->payment_type,
            'invoice'=> $request->invoice,
            'total'=> $request->total,
            'paid'=> $request->paid,
            'due'=> $request->due,
        ]);
        // store purchased foods
        $purchase->food()->attach($request->food_items);

        return $this::success($purchase);    
    }

    // ------- Read ---------
    function get()
    {
        $purchases = Purchase::with('supplier')->get();
        return $this::success($purchases);
    }
  
    // ------- Delete ----------
    function delete(Request $request)
    {
        $request->validate(['id' => 'required|numeric']);
        $purchase = Food::find($request->id);
        if (!$purchase) return $this::error(null, "Purchase whih this Id doesn't exist", 404);
        $purchase->delete();
        return $this::success(null, 'Deleted');
    }

}
