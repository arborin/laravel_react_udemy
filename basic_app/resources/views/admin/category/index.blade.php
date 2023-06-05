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
                        @if (session('success'))
                            <div class="alert alert-success" role="alert">
                                {{ session('success') }}
                            </div>
                        @endif
                        <div class="card">
                            <div class="card-header">
                                All Categories
                            </div>
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">SL No</th>
                                            <th scope="col">Category Name</th>
                                            <th scope="col">User</th>
                                            <th scope="col">Created At</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($categories as $category)
                                            <tr>
                                                <td>{{ $categories->firstItem() + $loop->index }}</td>
                                                <td>{{ $category->category_name }}</td>
                                                <td>{{ $category->user_name }}</td>
                                                <td>
                                                    @if ($category->created_at != null)
                                                        {{ Carbon\Carbon::parse($category->created_at)->diffForHumans() }}
                                                    @else
                                                        <span class="text-danger">თარიღი ვერ მოიძებნა</span>
                                                    @endif
                                                </td>
                                                <td>
                                                    <a href="{{ url("category/edit/$category->id") }}"
                                                        class="btn btn-warning btn-sm">Edit</a>
                                                    <a href={{ url("softdelete/category/$category->id") }}
                                                        class="btn btn-danger btn-sm">Delete</a>
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                                {{ $categories->links() }}
                            </div>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                Add Categories
                            </div>
                            <div class="card-body">
                                <form action='{{ route('add.category') }}' method="post">
                                    @csrf
                                    <div class="form-group">
                                        <label for="catName">Category name</label>
                                        <input type="text" name='category_name' class="form-control"
                                            id="catName" />
                                        @error('category_name')
                                            <p class="text-danger">{{ $message }}</p>
                                        @enderror
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-2">Add Cateogry</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
</x-app-layout>
