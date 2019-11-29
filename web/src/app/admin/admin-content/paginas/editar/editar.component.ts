import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../auth/services/data.service';
import { Post } from '../../../../auth/interfaces/post.model';
import { Postmeta } from '../../../../auth/interfaces/postmeta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  form = this.fb.group({
    id: [''],
    content: [''],
    name: [''],
    permalink: [''],
    metakeys: [''],
    menu_item: [''],
    menu_order: [''],
    status: [''],
    excerpt: ['']
  })
  
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router,public fb: FormBuilder ){ 
  }
  
 
  selectedFile: File;
  selectedPage:  Post  = {id: null, name: null, content: null, menu_item: 'Não', type: null, excerpt: null, comments_status: null, status: 'Ativo', created_at: null, updated_at: null};
  selectedPageMeta: Postmeta [] = [];// {id: null, post_id: null, metakey: null, metavalue: null, created_at: null, updated_at: null};
  featureImage;

  ngOnInit() {
    this.getPageDetail(this.route.snapshot.paramMap.get('id'));
  }

  contentUploadImage(a,b,c){
    console.log(a,b,c);
  }

  submitForm(){
    this.selectedPage.id = this.form.get('id').value;
    this.selectedPage.content = this.form.get('content').value;
    this.selectedPage.name = this.form.get('name').value;
    this.selectedPage.excerpt = this.form.get('excerpt').value;
    this.selectedPage.status = this.form.get('status').value;
    this.selectedPage.menu_item = this.form.get('menu_item').value;
    
    for (let i = 0; i < this.selectedPageMeta.length; i++) {
        this.selectedPageMeta[i].metakey === 'permalink' ? this.selectedPageMeta[i].metavalue= this.form.get('permalink').value.replace(/[^0-9a-z-A-Z ]/g, "").replace(/\s/g, '-').toLowerCase() : false;
        this.selectedPageMeta[i].metakey === 'metakeys' ? this.selectedPageMeta[i].metavalue= this.form.get('metakeys').value : false;
        this.selectedPageMeta[i].metakey === 'menu_order' ? this.selectedPageMeta[i].metavalue= this.form.get('menu_order').value : false;
    }
    this.updatePage(this.selectedPage, this.selectedPageMeta)
  }
  updatePage(post, metas){
      this.dataService.updatePost(post).subscribe((post: Post)=>{
        console.log("Post updated" , post);
      });
      for (let i = 0; i < metas.length; i++) {
        this.dataService.updatePostMeta(metas[i],metas[i].id).subscribe((response) =>{
          console.log(response),
          this.getPageDetail(this.selectedPage.id)
          this.router.navigate(['../admin/paginas']);
        } ,(error) => console.log(error));
      }
    }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("image", this.selectedFile, this.selectedFile.name);
    this.dataService.uploadFile(formData).subscribe((response) => {var url = response; this.onUpload(url)});
  }
  onUpload(value) {
    console.log(value);
    for (let i = 0; i < this.selectedPageMeta.length; i++) {
      this.selectedPageMeta[i].metakey === 'image' ? this.selectedPageMeta[i].metavalue = value.url : false;
    }
  }
  getPageDetail(id){
    this.dataService.getPost(id).subscribe(data =>{
      this.selectedPage = data.data;
      this.loadPage(this.selectedPage);
      this.selectedPageMeta= data.meta;
      this.loadMetas(this.selectedPageMeta);
      console.log(this.selectedPageMeta);
    })
  }
  loadMetas(metas){
    console.log('entrou aqui');
    for (let i = 0; i < metas.length; i++) {
      metas[i].metakey === 'permalink' ? this.form.controls['permalink'].setValue(metas[i].metavalue) : false;
      metas[i].metakey === 'metakeys' ? this.form.controls['metakeys'].setValue(metas[i].metavalue) : false;
      metas[i].metakey === 'menu_order' ? this.form.controls['menu_order'].setValue(metas[i].metavalue) : false;
    }
  }
  loadPage(options){
    this.form.controls['id'].setValue(options.id);
    this.form.controls['content'].setValue(options.content);
    this.form.controls['name'].setValue(options.name);
    this.form.controls['status'].setValue(options.status);
    this.form.controls['excerpt'].setValue(options.excerpt);
    this.form.controls['menu_item'].setValue(options.menu_item);

  }
}
