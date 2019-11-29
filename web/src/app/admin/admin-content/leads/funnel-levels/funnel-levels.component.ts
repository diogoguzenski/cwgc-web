import { Component, OnInit } from '@angular/core';
import { FunnelLevel } from '../../../../auth/interfaces/funnellevel.model';
import { DataService } from '../../../../auth/services/data.service';
import { ModalService } from '../../../services/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lead } from '../../../../auth/interfaces/lead.model';

@Component({
  selector: 'app-funnel-levels',
  templateUrl: './funnel-levels.component.html',
  styleUrls: ['./funnel-levels.component.css']
})
export class FunnelLevelsComponent implements OnInit {
    selectedFunnell: FunnelLevel = {id: null,  name: null, description: null, status:null, created_at:null, updated_at:null };
    funnelslevel : FunnelLevel[];
    leads: Lead[];
    selectedLead: Lead = {id: null,  name: null,  email: null,  phone: null,  city: null,  address: null, zipcode: '',  status: null,  origin: null, comments: null,  funnel_level_id: null};

    constructor(private dataService: DataService, private modalService: ModalService, private route: ActivatedRoute, private router: Router) { }
  
    ngOnInit() {
      this.getAllFunnelsLevels(this.route.snapshot.paramMap.get('id'));
    }
  
    getAllFunnelsLevels(id){
      this.dataService.getFunnelsLevels(id).
      subscribe(
        (data:any[])=>{
        this.funnelslevel = data;
        console.log(this.funnelslevel);
      })
    }


    selectFunnelLevel(funnellevel: FunnelLevel){
      this.selectedFunnell = funnellevel;
      console.log(this.selectedFunnell.id);
      this.dataService.getLeadsFunnelLevel(this.selectedFunnell.id).subscribe((data:any[])=>{
        this.leads = data;
        console.log(data);
      });
      this.openModal('custom-modal-1');
    }
    createFunnelLevel(form){
      form.value.funnel_id = this.route.snapshot.paramMap.get('id');
      form.value.status = 'active';
      this.dataService.createFunnelLevel(form.value).subscribe((funnellevel: FunnelLevel)=>{
        console.log("Lead created, ", funnellevel);
      });
      //this.router.navigate(['../admin/paginas']);
      this.getAllFunnelsLevels(this.route.snapshot.paramMap.get('id'));
    }
    selectLead(lead: Lead){
      this.selectedLead = lead;
      console.log(this.selectedLead);
      this.openModal('custom-modal-3');
    }
    updateLead(form){
      form.value.id = this.selectedLead.id;
      //console.log(form.value);
        this.dataService.updateLead(form.value).subscribe((lead: Lead)=>{
          console.log("Lead updated" , lead);
          console.log(form.value);
          this.getAllFunnelsLevels(this.route.snapshot.paramMap.get('id'));
          this.closeModal('custom-modal-3');
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


