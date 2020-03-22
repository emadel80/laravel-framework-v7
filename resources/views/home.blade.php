@extends('layouts.app')        
           
@section('content')
    <wide-header
        title="{{ config('app.name', 'Laravel Framework 7') }}"
        links="{{ $links }}">
    </wide-header>
@endsection

   
