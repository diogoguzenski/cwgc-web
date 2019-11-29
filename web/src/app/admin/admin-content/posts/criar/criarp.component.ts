import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../auth/interfaces/post.model';
import { DataService } from '../../../../auth/services/data.service';
import { Router } from '@angular/router';
import { Postmeta } from '../../../../auth/interfaces/postmeta.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criarp',
  templateUrl: './criarp.component.html',
  styleUrls: ['./criarp.component.css']
})
export class CriarPComponent  implements OnInit {
  form = this.fb.group({
    id: [''],
    content: [''],
    name: [''],
    permalink: [''],
    metakeys: [''],
    comments_status: [''],
    status: [''],
    image: [''],
    categories: [''],
    excerpt: ['']
  })
  
  constructor(private dataService: DataService, private router: Router,public fb: FormBuilder ){ 
  }
  
 
  selectedFile: File;
  selectedPost:  Post  = {id: null, name: null, content: null, menu_item: 'Não', type: 'post', excerpt: null, comments_status: 'Ativo', status: 'Ativo', created_at: null, updated_at: null}; 
  selectedPostMeta: Postmeta [] = [
    {id: null, post_id: null, metakey: 'permalink', metavalue: null, created_at: null, updated_at: null},
    {id: null, post_id: null, metakey: 'metakeys', metavalue: null, created_at: null, updated_at: null},
    {id: null, post_id: null, metakey: 'image', metavalue: null, created_at: null, updated_at: null},
    {id: null, post_id: null, metakey: 'categories', metavalue: null, created_at: null, updated_at: null}
  ];// {id: null, post_id: null, metakey: null, metavalue: null, created_at: null, updated_at: null};


  ngOnInit() {
  }
  submitForm(){
    // console.log(this.form.value);
    this.selectedPost.id = this.form.get('id').value;
    this.selectedPost.content = this.form.get('content').value;
    this.selectedPost.name = this.form.get('name').value;
    this.selectedPost.excerpt = this.form.get('excerpt').value;
    this.selectedPost.status = this.form.get('status').value;
    
    for (let i = 0; i < this.selectedPostMeta.length; i++) {
        this.selectedPostMeta[i].metakey === 'permalink' ? this.selectedPostMeta[i].metavalue= this.form.get('name').value.replace(/[^0-9a-z-A-Z ]/g, "").replace(/\s/g, '-').toLowerCase() : false;
        this.selectedPostMeta[i].metakey === 'image' ? this.selectedPostMeta[i].metavalue= this.form.get('image').value : false;
        this.selectedPostMeta[i].metakey === 'metakeys' ? this.selectedPostMeta[i].metavalue= this.form.get('metakeys').value : false;
        this.selectedPostMeta[i].metakey === 'categories' ? this.selectedPostMeta[i].metavalue= this.form.get('categories').value : false;
    }
    this.createPost(this.selectedPost);
  }

  createPost(post){
    console.log(this.selectedPost);
      this.dataService.createPost(post).subscribe((response)=>{
        console.log("Post created" , response);
        let last_insert_id = +response;
        for (let i = 0; i < this.selectedPostMeta.length; i++) {
          this.selectedPostMeta[i].post_id = last_insert_id;
          this.dataService.createPostMeta(this.selectedPostMeta[i]).subscribe((response) => console.log(response),(error) => console.log(error));
        }
  
      });
      console.log(this.selectedPostMeta);
      
      this.router.navigate(['../admin/posts']);
    }

}
