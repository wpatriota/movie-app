<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\desenvolvedor;
use App\Models\nivel;
use Illuminate\Routing\Controller as BaseController;

class ApiController extends Controller
{
    public function api_getAllDesenvolvedores() {
        $desenvolvedores = Desenvolvedor::all();
        return response()->json($desenvolvedores);
      }
  
      public function api_createDesenvolvedor(Request $request) {
        $desenvolvedor = new desenvolvedor();
        $desenvolvedor->nome = $request->nome;
        $desenvolvedor->nivel = $request->nivel;
        $desenvolvedor->datanascimento = $request->datanascimento;
        $desenvolvedor->sexo = $request->sexo;
        $desenvolvedor->idade = $request->idade;
        $desenvolvedor->hobby = $request->hobby;
        $desenvolvedor->save();

        return response90->json('Desenvolvedor criado com sucesso');
      }
  
      public function api_getDesenvolvedor($id) {
        if(Desenvolvedor::find($id)) {
          $desenvolvedor = Desenvolvedor::find($id);
          return response()->json($desenvolvedor);
        } else {
          return response()->json('Desenvolvedor não encontrado');
        }
        $desenvolvedor = desenvolvedor::find($id);
        return response()->json($desenvolvedor);
      }
  
      public function api_updateDesenvolvedor(Request $request, $id) {
        $desenvolvedor = desenvolvedor::find($id);
        $desenvolvedor->nome = $request->get('nome');
        $desenvolvedor->nivel = $request->get('nivel');
        $desenvolvedor->sexo = $request->get('sexo');
        $desenvolvedor->datanascimetno = $request->get('datanascimento');
        $desenvolvedor->idade = $request->get('idade');
        $desenvolvedor->hobby = $request->get('hobby');

        $product->save();
        return response()->json('Desenvolvedor alterado com sucesso');
      }
  
      public function api_deleteDesenvolvedor ($id) {
        $desenvolvedor = desenvolvedor::find($id);
        $desenvolvedor->delete();
        return response()->json('Desenvolvedor deletado com sucesso');
      }

      public function api_getAllNiveis() {
        $niveis = Nivel::all();
        return response()->json($niveis, 200);
      }
  
      public function api_createNivel(Request $request) {
        $nivel = new nivel();
        $nivel->nivel = $request->nivel;
        $nivel->save();
        return response()->json('Nivel criado com sucesso', 201);
      }
  
      public function api_getNivel($id) {
        $nivel = nivel::find($id);
        return response()->json('Nivel encontrado com sucesso', $nivel, 200);
      }

      public function api_updateNivel(Request $request, $id) {
        $nivel = nivel::find($id);
        $nivel->nivel = $request->nivel;
        $nivel->save();
        return response()->json('Nivel alterado com sucesso', $nivel, 200);
      }
  
      public function api_deleteNivel ($id) {
        $nivel = nivel::find($id);
        $nivel->delete();
        return response()->json('Nivel deletado com sucesso', $nivel, 200);
      }
}

