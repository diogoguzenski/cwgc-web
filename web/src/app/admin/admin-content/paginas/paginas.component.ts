import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../auth/services/data.service';
import { Post } from '../../../auth/interfaces/post.model';


@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css']
})
export class PaginasComponent implements OnInit {
  pages:  Post[];
  selectedPage:  Post  = {id: null, name: null, content: null, menu_item: 'Não', type: null, excerpt: null, comments_status: null, status: null,  created_at: null, updated_at: null};


  constructor(private dataService: DataService) {

  }
 
  ngOnInit() {
    this.getAllPages();
  }

  getAllPages(){
    this.dataService.getPages().
    subscribe(
      (data:any[])=>{
      this.pages = data;
      console.log(this.pages);
    })
  }
  
  selectPage(page: Post){
    this.selectedPage = page;
  }

  deletePage(id){
    this.dataService.deletePage(id).subscribe((page: Post)=>{
      console.log("Page deleted, ", page);
      this.getAllPages();
    });
  }
}
