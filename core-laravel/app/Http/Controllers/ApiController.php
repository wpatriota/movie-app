<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\desenvolvedor;
use App\Models\nivel;
use Illuminate\Routing\Controller as BaseController;

class ApiController extends Controller
{
    public function getAllDesenvolvedores() {
        $desenvolvedores = Desenvolvedor::all();
        return response()->json($desenvolvedores);
      }
  
      public function createDesenvolvedor(Request $request) {
        $desenvolvedor = new desenvolvedor();
        $desenvolvedor->nome = $request->nome;
        $desenvolvedor->nivel = $request->nivel;
        $desenvolvedor->datanascimento = $request->datanascimento;
        $desenvolvedor->sexo = $request->sexo;
        $desenvolvedor->idade = $request->idade;
        $desenvolvedor->hobby = $request->hobby;
        $desenvolvedor->save();
      }
  
      public function getDesenvolvedor($id) {
        $desenvolvedor = desenvolvedor::find($id);
        return response()->json($desenvolvedor);
      }
  
      public function updateDesenvolvedor(Request $request, $id) {
        // logic to update a student record goes here
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
  
      public function deleteDesenvolvedor ($id) {
        // logic to delete a student record goes here
        $desenvolvedor = desenvolvedor::find($id);
        $desenvolvedor->delete();
      }

      public function getAllNiveis() {
        // logic to get all students goes here
      }
  
      public function createNivel(Request $request) {
        $nivel = new nivel();
        $nivel->nome = $request->nome;
        $nivel->nivel = $request->nivel;
        $nivel->save();
      }
  
      public function getNivel($id) {
        // logic to get a student record goes here
        $nivel = nivel::find($id);
        return response()->json($nivel);
      }

      public function updateNivel(Request $request, $id) {
        // logic to update a student record goes here
      }
  
      public function deleteNivel ($id) {
        // logic to delete a student record goes here
        $nivel = nivel::find($id);
        $nivel->delete();
      }
}

