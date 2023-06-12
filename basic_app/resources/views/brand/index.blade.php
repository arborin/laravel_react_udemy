@if (session('success'))
    {{ session('success') }}
@endif



<form method="post" action="{{ route('store.brand') }}" enctype="multipart/form-data">
    @csrf
    <input name="brand_name" type="text">
    <br>
    <br>
    <input name="brand_img" type="file">
    <br>
    <br>
    <input type="submit" value="Save" />
</form>


<table>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>image</th>
        <th>date</th>
        <th>action</th>

    </tr>
    @foreach ($brands as $brand)
        <tr>
            <td>{{ $brand['id'] }}</td>
            <td>{{ $brand['brand_name'] }}</td>
            <td><img src="{{ asset($brand['brand_img']) }}" width="40px" /></td>
            <td>{{ Carbon\Carbon::parse($brand['created_at'])->diffForHumans() }}</td>
            <td><a href="{{ route('edit.brand', ['id' => $brand['id']]) }}">EDIT</a></td>
        </tr>
    @endforeach
</table>
