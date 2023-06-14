<form method="post" action="{{ route('store.images') }}" enctype="multipart/form-data">
    @csrf
    <input name="brand_name" type="text" value="">
    <br>
    <br>

    <input name="brand_img" type="file" multiple=''>
    <br>
    <br>
    <input type="submit" value="Save" />
</form>
