<?php

namespace App\Traits;

trait HttpResponses
{

  public static function success($data, $message = null, $code = 200)
  {
    return response()->json([
      'success' => true,
      'message' => $message,
      'payload' => $data
    ],  $code);
  }

  public static  function error($data, $message = null, $code = 404 , $errorLevel=2)
  {
    return response()->json([
      'success' => false,
      'message' => $message,
      'payload' => $data,
      'errorLevel'=> $errorLevel
    ],  $code);
  }
}
