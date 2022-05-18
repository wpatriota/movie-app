<!-- index.blade.php -->

@extends('layout')

@section('content')
<style>
  .uper {
    margin-top: 40px;
  }
</style>
<div class="uper">
  @if(session()->get('success'))
    <div class="alert alert-success">
      {{ session()->get('success') }}  
    </div><br />
  @endif
  <table class="table table-striped">
    <thead>
        <tr>
          <td>ID</td>
          <td>desenvolvedor Name</td>
          <td>desenvolvedor Price</td>
          <td colspan="2">Action</td>
        </tr>
    </thead>
    <tbody>
        @foreach($desenvolvedores as $desenvolvedor)
        <tr>
            <td>{{$desenvolvedor->id}}</td>
            <td>{{$desenvolvedor->name}}</td>
            <td>{{$desenvolvedor->price}}</td>
            <td><a href="{{ route('desenvolvedores.edit', $desenvolvedor->id)}}" class="btn btn-primary">Edit</a></td>
            <td>
                <form action="{{ route('desenvolvedores.destroy', $desenvolvedor->id)}}" method="post">
                  @csrf
                  @method('DELETE')
                  <button class="btn btn-danger" type="submit">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
  </table>
  <div id="root"></div>
<div>
@endsection