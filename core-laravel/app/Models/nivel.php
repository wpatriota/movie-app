<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nivel extends Model
{
    use HasFactory;

    public function index()
    {
        $niveis = Nivel::all();
        
        return view('index',compact('niveis'));
    }

    public function create()
    {
        return view('create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'nivel' => 'required',
        ]);

        $show = Nivel::create($validatedData);
   
        return redirect('/Niveles')->with('OK', 'Nivel incluído');
    }

    public function edit($id)
    {
        $Nivel = Nivel::findOrFail($id);

        return view('edit', compact('Nivel'));
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nivel' => 'required|max:255'
        ]);
        Nivel::whereId($id)->update($validatedData);

        return redirect('/Niveles')->with('ok', ' Nivel atualizado');
    }

    public function destroy($id)
    {
        $Nivel = Nivel::findOrFail($id);
        $Nivel->delete();

        return redirect('/Niveles')->with('success', 'Nivel Data is successfully deleted');
    }
}
