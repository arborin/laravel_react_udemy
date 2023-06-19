<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>sections</h1>
    <table border='1' style="width:100%">
        @foreach ($sections as $section)
            <tr>
                <td>{{ $section->id }}</td>
                <td>{{ $section->section_name }}</td>
                <td>{{ $section->price }}</td>
            </tr>
        @endforeach
    </table>
</body>

</html>
