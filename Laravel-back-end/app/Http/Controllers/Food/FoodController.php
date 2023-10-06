<?php

namespace App\Http\Controllers\Food;

use App\Models\Foods\Food;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Foods\FoodGroup;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\Foods\StoreFoodRequest;
use App\Http\Requests\Foods\UpdateFoodRequest;
use \Illuminate\Support\Facades\Storage;

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

        return $this::success($food);
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
    function put(UpdateFoodRequest $request)
    {

        Food::where('id', $request->id)->update(
            [
                'food_group_id' => $request->food_group_id,
                'name' => $request->name,
                'price' => $request->price,
                'is_special' => $request->is_special
            ]
        );
        return $this::success("food has been updated");
    }

    function editImg(Request $request , $id){
        $path  = $request->file('image')->store('images'  , 'public');
        $food = Food::find($id);
        $old_path = $food->image;
        $food::update([
            'image' => $path
        ]);
        Storage::delete($old_path);
    }

    // ------- Delete ----------
    function delete(Request $request , $id)
    {
        $food = Food::find($id);
        if (!$food) return $this::error(null, "Food whih this Id doesn't exist", 404);
        $food->delete();
        return $this::success(null, 'Deleted');
    }
}
