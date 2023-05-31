<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
            {{ Auth::user()->name }}
<<<<<<< HEAD
            <p>Users: {{ count($users) }}</p>
=======
            <p>Categories: {{ count([1, 2, 3]) }}</p>
>>>>>>> ab7252750e04cca414bfb2b87ec13b23f80c82f9
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
<<<<<<< HEAD
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                {{-- <x-jet-welcome /> --}}
                <div class="container">
                    <div class="row">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">SL No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                @php($i = 1)
                                @foreach ($users as $user)
                                    <tr>
                                        <td>{{ $i }}</td>
                                        <td>{{ $user->name }}</td>
                                        <td>{{ $user->email }}</td>
                                        <td>{{ Carbon\Carbon::parse($user->created_at)->diffForHumans() }}</td>
                                    </tr>
                                    @php($i++)
                                @endforeach


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
=======

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
                                            <th scope="col">Name</th>
                                            <th scope="col">Created At</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($categories as $category)
                                            <tr>
                                                <td>{{ $category->id }}</td>
                                                <td>{{ $category->category_name }}</td>
                                                <td>{{ $category->created_at }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
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
>>>>>>> ab7252750e04cca414bfb2b87ec13b23f80c82f9
</x-app-layout>
