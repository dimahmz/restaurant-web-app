<?php

namespace App\Http\Controllers\Food;

use App\Http\Controllers\Controller;
use App\Http\Requests\Foods\AddFoodVariationRequest;
use App\Http\Requests\Foods\UpdateFoodVariations;
use App\Models\Foods\Food;
use App\Models\Foods\FoodVariation;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class FoodVariationController extends Controller
{
    use HttpResponses;
    function get(){
        $foodVariations = FoodVariation::all();
        if($foodVariations) return  $this::success($foodVariations);
        return $this::error(null,"Food doesn't exist");
    }
    function post(AddFoodVariationRequest $request, $id){
        $food = Food::find($id);
        if(!$food) return $this::error(null, "Food whih this Id doesn't exist", 404);        
        $food->variations()->attach($request->variations_IDs);
        return $this::success(null, "Variations has been added");
    }

    function getByFoodID($foodID){
        $foodVariation = FoodVariation::where('food_id' , '=', $foodID)->get();
        if($foodVariation) return  $this::success($foodVariation);
        return $this::error(null,"Food doesn't exist");
    }

    function put(UpdateFoodVariations $request){
        $foodVariations = $request->food_variations;

        foreach ($foodVariations as $foodVariations) {
            FoodVariation::where([["variation_id", "=", $foodVariations["variation_id"]], ["food_id", "=", $foodVariations["food_id"]]])->update([
                "price" => $foodVariations["price"]
            ]);

            
        }
        return $this::success(null,"variations has been updated!");

    }

}
