import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../auth/services/data.service';
import { Lead } from '../../../../auth/interfaces/lead.model';
import { ModalService } from '../../../services/modal.service';
import { Funnel } from '../../../../auth/interfaces/funnel.model';
import { FunnelLevel } from '../../../../auth/interfaces/funnellevel.model';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  selectedLead: Lead = {id: null,  name: null,  email: null,  phone: null,  city: null,  address: null, zipcode: '',  status: null,  origin: null, comments: null,  funnel_level_id: null};
  leads: Lead [];
  funnels: Funnel[];
  funnelsLevel: FunnelLevel[];


  constructor(private dataService: DataService, private modalService: ModalService) { }

  ngOnInit() {
    this.getAllLeads();
    this.getFunnels();
  }

  getAllLeads(){
    this.dataService.getLeads().
    subscribe(
      (data:any[])=>{
      this.leads = data;
      console.log(this.leads);
    })
  }
  getFunnels(){
    this.dataService.getFunnels().subscribe((data:any[])=>{this.funnels = data;console.log(this.funnels)});
  }
  getFunnelsLevel(id){
    this.dataService.getFunnelsLevels(id).subscribe((data:any[])=>{this.funnelsLevel = data;console.log(this.funnelsLevel)});
  }

  onChangeFunnel(value){
    this.getFunnelsLevel(value);   
  }
  selectLead(lead: Lead){
    this.selectedLead = lead;
    console.log(this.selectedLead);
    this.openModal('custom-modal-1');
  }
  createLead(form){
    this.dataService.createLead(form.value).subscribe((lead: Lead)=>{
      console.log("Lead created, ", lead);
      console.log(form.value);
    });
    //this.router.navigate(['../admin/paginas']);
    this.getAllLeads();
  }
  updateLead(form){
    form.value.id = this.selectedLead.id;
    //console.log(form.value);
      this.dataService.updateLead(form.value).subscribe((lead: Lead)=>{
        console.log("Lead updated" , lead);
        console.log(form.value);
        this.getAllLeads();
        this.closeModal('custom-modal-1');
      });
      //this.router.navigate(['../admin/paginas']);
    }

  deleteLead(id){
    this.dataService.deleteLead(id).subscribe((lead: Lead)=>{
      console.log("Lead deleted, ", lead);
      this.getAllLeads();
    });
  }
  
  
  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
      this.modalService.close(id);
  }

}
