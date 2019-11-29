import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../auth/interfaces/post.model';
import { DataService } from '../../../../auth/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Postmeta } from '../../../../auth/interfaces/postmeta.model';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {
  form = this.fb.group({
    id: [''],
    content: [''],
    name: [''],
    permalink: [''],
    metakeys: [''],
    menu_item: ['Não'],
    status: ['Ativo'],
    image: [''],
    menu_order: [''],
    excerpt: ['']
  })
  
  constructor(private dataService: DataService, private router: Router,public fb: FormBuilder ){ 
  }
  
 
  selectedFile: File;
  selectedPage:  Post  = {id: null, name: null, content: null, menu_item: 'Não', type: 'page', excerpt: null, comments_status: 'Inativo', status: 'Ativo', created_at: null, updated_at: null}; 
  selectedPostMeta: Postmeta [] = [
    {id: null, post_id: null, metakey: 'permalink', metavalue: null, created_at: null, updated_at: null},
    {id: null, post_id: null, metakey: 'metakeys', metavalue: null, created_at: null, updated_at: null},
    {id: null, post_id: null, metakey: 'menu_order', metavalue: null, created_at: null, updated_at: null},
  ];// {id: null, post_id: null, metakey: null, metavalue: null, created_at: null, updated_at: null};


  ngOnInit() {
  }
  submitForm(){
    // console.log(this.form.value);
    this.selectedPage.id = this.form.get('id').value;
    this.selectedPage.content = this.form.get('content').value;
    this.selectedPage.name = this.form.get('name').value;
    this.selectedPage.excerpt = this.form.get('excerpt').value;
    this.selectedPage.status = this.form.get('status').value;
    
    for (let i = 0; i < this.selectedPostMeta.length; i++) {
        this.selectedPostMeta[i].metakey === 'permalink' ? this.selectedPostMeta[i].metavalue= this.selectedPage.name.replace(/[^0-9a-z-A-Z ]/g, "").replace(/\s/g, '-').toLowerCase() : false;
        this.selectedPostMeta[i].metakey === 'menu_order' ? this.selectedPostMeta[i].metavalue= this.form.get('menu_order').value : false;
        this.selectedPostMeta[i].metakey === 'metakeys' ? this.selectedPostMeta[i].metavalue= this.form.get('metakeys').value : false;
    }
    this.createPage(this.selectedPage);
  }

  createPage(post){
    console.log(this.selectedPage);
      this.dataService.createPage(post).subscribe((response)=>{
        console.log("Page created" , response);
        let last_insert_id = +response;
        for (let i = 0; i < this.selectedPostMeta.length; i++) {
          this.selectedPostMeta[i].post_id = last_insert_id;
          this.dataService.createPostMeta(this.selectedPostMeta[i]).subscribe((response) => console.log(response),(error) => console.log(error));
        }
        let route = '../admin/paginas/';
        this.router.navigate([route]);
      });
  }
}
