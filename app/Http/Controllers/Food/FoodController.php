<?php

namespace App\Http\Controllers\Food;

use App\Models\Foods\Food;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\Foods\FoodGroup;
use App\Http\Controllers\Controller;
use App\Http\Requests\Foods\StoreFoodRequest;
use App\Http\Requests\Foods\UpdateFoodRequest;

class FoodController extends Controller
{
    use HttpResponses;

    // ------- Create ----------
    function post(StoreFoodRequest $request)
    {
        $path =  $request->file('image')->store('images' , 'public');

        $food = Food::create([
            'food_group_id' => $request->food_group_id,
            'name' => $request->name,
            'price' => $request->price,
            'is_special' => $request->is_special ? $request->is_special  : 0,
            'image' => $path ,
        ]);

        // create the the food properties
        if ($request->properties_IDs)
            $food->properties()->attach($request->properties_IDs);
        // create the food variations
        if ($request->variations_IDs)
            $food->variations()->attach($request->variations_IDs);

        return $this::success($food);
    }

    // ------- Read ----------
    function get()
    {
        $foods = FoodGroup::with('foods.variations', 'foods.properties.property_items')->get();
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

    // ------- Delete ----------
    function delete(Request $request)
    {
        $request->validate(['id' => 'required|numeric']);
        $food = Food::find($request->id);
        if (!$food) return $this::error(null, "Food whih this Id doesn't exist", 404);
        $food->delete();
        return $this::success(null, 'Deleted');
    }
}
