<?php 

namespace App\Http\Controllers;

use App\Pessoa;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PessoaController extends Controller 
{

  public function index() 
  {
    return Pessoa::orderBy('nome')
      ->take(50)
      ->get();
  }

  /**
   * @param $id int
   */
  public function show($id) 
  {
    return Pessoa::where(['id' => $id])
      ->first();
  }

  /**
   * @param $req Request
   * @return Response
   */
  public function create(Request $req) {

    $pessoa = new Pessoa();
    $pessoa->nome = $req->nome;
    $pessoa->idade = $req->idade;
    $pessoa->save();
    
    return response()
      ->json(['result' => 'ok']);
  }

  public function update(Request $req, $id) {
    $pessoa = Pessoa::find($id);

    $pessoa->nome = $req->nome;
    $pessoa->idade = $req->idade;
    $pessoa->save();
    
    return response()
      ->json(['result' => 'ok']);
  }

  public function delete($id) {
    $pessoa = Pessoa::find($id);
    $pessoa->delete();

    return response()
      ->json(['result' => 'ok']);
  }

}