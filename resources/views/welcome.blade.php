<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">



<head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Styles -->

    @viteReactRefresh
    @vite('resources/js/app.js')
</head>



<body>

    <div id="root">
    </div>

</body>

</html>