<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Pessoa extends Model {
  protected $table = 'pessoas';
  protected $guarded = [];
  protected $attributes = [
    'id' => 0,
    'nome' => '',
    'idade' => 0
  ];
}
