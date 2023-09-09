<?php

namespace App\Exceptions;

use Exception;

class OutOfStockException extends Exception
{
    protected $message = 'Out of stock';
    protected $code = 404;
    public function __construct($message = null, $code = null)
    {
        if ($message !== null) {
            $this->message = $message;
        }

        if ($code !== null) {
            $this->code = $code;
        }

        parent::__construct($this->message, $this->code);
    }
}
