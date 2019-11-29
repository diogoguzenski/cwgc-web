import { Component, OnInit } from '@angular/core';
import { Funnel } from '../../../../auth/interfaces/funnel.model';
import { DataService } from '../../../../auth/services/data.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-funnels',
  templateUrl: './funnels.component.html',
  styleUrls: ['./funnels.component.css']
})
export class FunnelsComponent implements OnInit {
  funnels : Funnel[];
  selectedFunnel: Funnel = {id: null,  name: null, description: null, status:'ativo', created_at:null, updated_at:null };

  constructor(private dataService: DataService, private modalService: ModalService) { }

  ngOnInit() {
    this.getAllFunnels();
  }

  getAllFunnels(){
    this.dataService.getFunnels().
    subscribe(
      (data:any[])=>{
      this.funnels = data;
      console.log(this.funnels);
    })
  }
  
  createFunnel(form){
    console.log(form.value);
    this.dataService.createFunnel(form.value).subscribe((funnel: Funnel)=>{
      console.log("Funnel created, ", funnel);
      console.log(form.value);
      this.getAllFunnels();
    });
    //this.router.navigate(['../admin/paginas']);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
      this.modalService.close(id);
  }

}
