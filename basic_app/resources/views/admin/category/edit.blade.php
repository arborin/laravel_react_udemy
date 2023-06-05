<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
            {{ Auth::user()->name }}
            <p>Categories: {{ count([1, 2, 3]) }}</p>
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

            {{-- <x-jet-welcome /> --}}
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">
                                Edit Categories
                            </div>
                            <div class="card-body">
                                <form action='{{ url("category/update/$categories->id") }}' method="post">
                                    @csrf
                                    <div class="form-group">
                                        <label for="catName">Category name</label>
                                        <input type="text" name='category_name' class="form-control" id="catName"
                                            value="{{ $categories->category_name }}" />
                                        @error('category_name')
                                            <p class="text-danger">{{ $message }}</p>
                                        @enderror
                                    </div>
                                    <a href="{{ route('all.category') }}" class="btn btn-secondary mt-2">Back</a>
                                    <button type="submit" class="btn btn-primary mt-2">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
</x-app-layout>
