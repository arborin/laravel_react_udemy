<form method="post" action="{{ route('store.brand') }}" enctype="multipart/form-data">
    @csrf
    <input name="brand_name" type="text" value="{{ $brand->brand_name }}">
    <br>
    <br>
    <img src={{ asset($brand->brand_img) }} width="100px" />
    <br>
    <input name="brand_img" type="file" value="{{ $brand->brand_img }}">
    <br>
    <br>
    <input type="submit" value="Save" />
</form>
