import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../auth/services/data.service';
import { Post } from '../../../../auth/interfaces/post.model';
import { Postmeta } from '../../../../auth/interfaces/postmeta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-editar',
  templateUrl: './editarp.component.html',
  styleUrls: ['./editarp.component.css']
})
export class EditarPComponent implements OnInit {
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
  
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router,public fb: FormBuilder ){ 
  }
  
 
  selectedFile: File;
  selectedPost:  Post  = {id: null, name: null, content: null, menu_item: 'Não', type: null, excerpt: null, comments_status: null, status: null, created_at: null, updated_at: null};
  selectedPostMeta: Postmeta [] = [];// {id: null, post_id: null, metakey: null, metavalue: null, created_at: null, updated_at: null};
  featureImage;

  ngOnInit() {
    this.getPostDetail(this.route.snapshot.paramMap.get('id'));
  }


  contentUploadImage(a,b,c){
    console.log(a,b,c);
  }

  submitForm(){
    // console.log(this.form.value);
    this.selectedPost.id = this.form.get('id').value;
    this.selectedPost.content = this.form.get('content').value;
    this.selectedPost.name = this.form.get('name').value;
    this.selectedPost.excerpt = this.form.get('excerpt').value;
    this.selectedPost.status = this.form.get('status').value;
    
    for (let i = 0; i < this.selectedPostMeta.length; i++) {
        this.selectedPostMeta[i].metakey === 'permalink' ? this.selectedPostMeta[i].metavalue= this.form.get('permalink').value.replace(/[^0-9a-z-A-Z ]/g, "").replace(/\s/g, '-').toLowerCase() : false;
        this.selectedPostMeta[i].metakey === 'metakeys' ? this.selectedPostMeta[i].metavalue= this.form.get('metakeys').value : false;
        this.selectedPostMeta[i].metakey === 'categories' ? this.selectedPostMeta[i].metavalue= this.form.get('categories').value : false;
    }
    this.updatePost(this.selectedPost, this.selectedPostMeta);

  }
  updatePost(post, metas){
    console.log(this.selectedPost);
    console.log(this.form.value);
      this.dataService.updatePost(post).subscribe((post: Post)=>{
        console.log("Post updated" , post);
      });
      console.log(this.selectedPostMeta);
      for (let i = 0; i < metas.length; i++) {
        this.dataService.updatePostMeta(metas[i],metas[i].id).subscribe((response) => console.log(response),(error) => console.log(error));
      }

      this.router.navigate(['../admin/posts']);
    }
  changeContent(content){
    console.log(content);
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("image", this.selectedFile, this.selectedFile.name);
    this.dataService.uploadFile(formData).subscribe((response) => {var url = response; this.onUpload(url)});
  }
  onUpload(value) {
    console.log(value);
    for (let i = 0; i < this.selectedPostMeta.length; i++) {
      this.selectedPostMeta[i].metakey === 'image' ? this.selectedPostMeta[i].metavalue = value.url : false;
    }
  }
  getPostDetail(id){
    this.dataService.getPost(id).subscribe(data =>{
      this.selectedPost = data.data;
      this.loadPost(this.selectedPost);
      this.selectedPostMeta= data.meta;
      this.loadMetas(this.selectedPostMeta);
      console.log(this.selectedPostMeta);
    })
  }
  loadMetas(metas){
    console.log('entrou aqui');
    for (let i = 0; i < metas.length; i++) {
      metas[i].metakey === 'permalink' ? this.form.controls['permalink'].setValue(metas[i].metavalue) : false;
      metas[i].metakey === 'metakeys' ? this.form.controls['metakeys'].setValue(metas[i].metavalue) : false;
      metas[i].metakey === 'image' ? this.featureImage = metas[i].metavalue : false;
      metas[i].metakey === 'image' ? this.form.controls['image'].setValue(metas[i].metavalue) : false;
      metas[i].metakey === 'categories' ? this.form.controls['categories'].setValue(metas[i].metavalue) : false;
    }
  }
  loadPost(options){
    this.form.controls['id'].setValue(options.id);
    this.form.controls['content'].setValue(options.content);
    this.form.controls['name'].setValue(options.name);
    this.form.controls['status'].setValue(options.status);
    this.form.controls['comments_status'].setValue(options.comments_status);
    this.form.controls['excerpt'].setValue(options.excerpt);
  }
}
