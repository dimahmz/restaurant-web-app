<?php

namespace App\Http\Controllers\Food;

use App\Models\Foods\Food;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Foods\FoodGroup;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use \Illuminate\Support\Facades\Storage;
use App\Http\Requests\Foods\StoreFoodRequest;
use App\Http\Requests\Foods\UpdateFoodRequest;
use App\Http\Requests\Foods\AddFoodVariationRequest;

class FoodController extends Controller
{
    use HttpResponses;

    // ------- Create ----------
    function post(StoreFoodRequest $request)
    {
         $path  = $request->file('image')->store('images'  , 'public');

        $food = Food::create([
            'food_group_id' => $request->food_group_id,
            'name' => $request->name,
            'price' => $request->price,
            'is_special' => $request->is_special ? $request->is_special  : 0,
            'image' => $path ,
        ]);

        // TODO
        // create the food variations
        $IDs = json_decode($request->variations_IDs, true);
        if ($IDs){  
            $food->variations()->attach($IDs);
        }

        return $this::success($food, "Food has been added");
    }


    // add variation
    function addVariation(AddFoodVariationRequest $request, $id){
        $food = Food::find($id);
        if(!$food) return $this::error(null, "Food whih this Id doesn't exist", 404);        
        $food->variations()->attach($request->variations_IDs);
        return $this::success(null, "Variations has been added");
    }

    // ------- Read ----------
    function get()
    {
        $foods = Food::with('variations' , 'group')->orderBy('created_at' , 'desc')->get();
        return $this::success($foods);
    }
    function getOnlyFood()
    {
        $foods = FoodGroup::all();
        return $this::success($foods);
    }

    function getFood_var_prop(){
        $foods = Food::with('variations', 'properties.property_items')->get();
        return $this::success($foods);
    }

    function getSpecial(){
        $foods = Food::where('is_special' , '>' , 0);
        return $this::success($foods);
    }
    function getGroupsFoods()
    {
        $foods = FoodGroup::with('foods.variations')->get();
        return $this::success($foods);
        
    }

    function getFood()
    {
        $foods = Food::with('variations' , 'food_group')->get();
        return $this::success($foods);
    }

    // ------- Update ----------
    function put(UpdateFoodRequest $request , $id)
    {

        Food::where('id', $id)->update(
            [
                'food_group_id' => $request->food_group_id,
                'name' => $request->name,
                'price' => $request->price,
                'is_special' => $request->is_special
            ]
        );
        return $this::success(null, "Food has been updated");
    }
    function editImg(Request $request , $id){
        $size = 4*1024;
        $request->validate(['image' => "required|image|mimes:jpeg,png,jpg,gif|max:$size"]);
        $path  = $request->file('image')->store('images'  , 'public');

        $food = Food::find($id);
        // delete images if doesn't exist
        if(!$food) {
            Storage::disk('public')->delete("$path");
            return $this::error(null, "Food whih this Id doesn't exist", 404);
        }
        $old_path = $food->image;
        $food->update([
            'image' => $path
        ]);
        // delete old image
        Storage::disk('public')->delete("$old_path");
        return $this::success(null, 'Image has been updated');
    }

    // ------- Delete ----------
    function delete(Request $request , $id)
    {
        $food = Food::find($id);
        if (!$food) return $this::error(null, "Food whih this Id doesn't exist", 404);
        Storage::delete($food->image);
        $food->delete();
        return $this::success(null, 'Deleted');
    }
}
