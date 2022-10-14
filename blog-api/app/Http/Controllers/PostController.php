<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use Illuminate\Http\Request;
use App\Models\Post;
class PostController extends Controller
{
    public function index(){
        return PostResource::collection(Post::wherePublished(true)->latest()->get());
    }

    public function show(Post $post){
            return new PostResource($post);
    }

    
    
}
