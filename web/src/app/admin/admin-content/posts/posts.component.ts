import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../auth/services/data.service';
import { Post } from '../../../auth/interfaces/post.model';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:  Post[];
  selectedPost:  Post  = {id: null, name: null, content: null, menu_item: 'Não', type: null, excerpt: null, comments_status: null, status: null,  created_at: null, updated_at: null};


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this.dataService.getPosts().
    subscribe(
      (data:any[])=>{
      this.posts = data;
      console.log(this.posts);
    })
  }
  
  selectPost(post: Post){
    this.selectedPost = post;
  }

  deletePost(id){
    this.dataService.deletePost(id).subscribe((post: Post)=>{
      console.log("Post deleted, ", post);
    });
    this.getAllPosts();

  }
}
