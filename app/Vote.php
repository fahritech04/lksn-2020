<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $guarded = [];

    function choice() {
        return $this->belongsTo(Choice::class);
    }

    function user() {
        return $this->belongsTo(User::class);
    }

    function poll() {
        return $this->belongsTo(Poll::class);
    }

    function division() {
        return $this->belongsTo(Division::class);
    }
}
