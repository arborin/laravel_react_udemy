<form method="post" action="{{ route('update.brand') }}" enctype="multipart/form-data">
    @csrf
    <input type="hidden" name="id" value="{{ $brand->id }}" />
    <input type="hidden" name="old_image" value="{{ $brand->brand_img }}" />
    <input name="brand_name" type="text" value="{{ $brand->brand_name }}">
    <br>
    <br>
    <img src={{ asset($brand->brand_img) }} width="100px" />
    <br>
    <input name="brand_img" type="file">
    <br>
    <br>
    <input type="submit" value="Save" />
</form>
