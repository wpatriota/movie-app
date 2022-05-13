<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\desenvolvedor;

class desenvolvedorController extends Controller
{
    /**
     * Update the specified user.
     *
     * @param  \Illuminate\Http\Request  $request
     * 
     * @param int $id;
     * @param@nivel: fk
     * @param@paramnome: varchar
     * @param sexo: char
     * @param datanascimento: date
     * @param idade: integer
     * 
     * @return \Illuminate\Http\Response
     **/
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
{
        $desenvolvedores = Desenvolvedor::all();
        
        return view('index',compact('desenvolvedores'));
}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('create');
    }
    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
