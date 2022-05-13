<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class desenvolvedor extends Model
{
    use HasFactory;

    public function index()
    {
        $desenvolvedores = Desenvolvedor::all();
        
        return view('index',compact('desenvolvedores'));
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

        $show = Desenvolvedor::create($validatedData);
   
        return redirect('/desenvolvedores')->with('OK', 'Desenvolvedor incluído');
    }

    public function edit($id)
    {
        $desenvolvedor = Desenvolvedor::findOrFail($id);

        return view('edit', compact('desenvolvedor'));
    }
    
    /*public function update(Request $request, array $options = [])
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'price' => 'required'
        ]);
        Desenvolvedor::whereId($id)->update($validatedData);

        return redirect('/desenvolvedores')->with('ok', ' Desenvolvedor atualizado');
    }*/

    /*public function destroy($id)
    {
        $desenvolvedor = desenvolvedor::findOrFail($id);
        $desenvolvedor->delete();

        return redirect('/desenvolvedores')->with('success', 'desenvolvedor Data is successfully deleted');
    }*/
}
