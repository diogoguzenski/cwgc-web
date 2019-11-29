import { Component, OnInit } from '@angular/core';
import { Form } from '../../../auth/interfaces/form.model';
import { DataService } from '../../../auth/services/data.service';
import { ModalService } from '../../services/modal.service';
import { FunnelLevel } from '../../../auth/interfaces/funnellevel.model';
import { Funnel } from '../../../auth/interfaces/funnel.model';

@Component({
  selector: 'app-formsb',
  templateUrl: './formsb.component.html',
  styleUrls: ['./formsb.component.css']
})
export class FormsbComponent implements OnInit {
  forms : Form [];
  selectedForm: Form = {id: null,  inputs: null, name:null, short_tag:null};
  funnels: Funnel[];
  funnelsLevel: FunnelLevel[];
  
  constructor(private dataService: DataService, private modalService: ModalService) { }

  ngOnInit() {
    this.getAllForms();
    this.getFunnels();
  }

  getAllForms(){
    this.dataService.getForms().subscribe(
      (data:any[])=>{ this.forms = data; console.log(this.forms);
    })
  }
  selectForm(f: Form){
    this.selectedForm = f;
    console.log(this.selectedForm);
    this.openModal('custom-modal-1');
  }
  createForm(f){
    console.log(f.value);
    f.value.inputs  = `name:${f.controls['cname'].value},email:${f.controls['email'].value},phone:${f.controls['phone'].value},city:${f.controls['city'].value},address:${f.controls['address'].value},comments:${f.controls['comments'].value},funnel_level_id:${f.controls['funnel_level_id'].value},origin:${f.controls['origin'].value}, funnel_id:${f.controls['funnel_id'].value}`;

    this.dataService.createForm(f.value).subscribe((form: Form)=>{
      console.log("Form created, ", f);
      this.getAllForms();
    });
    //this.router.navigate(['../admin/paginas']);
  }
  updateForm(f){
    f.value.id = this.selectedForm.id;
    f.value.inputs = ((document.getElementById("inputsUpdate") as HTMLInputElement).value);
      this.dataService.updateForm(f.value).subscribe((form: Form)=>{
        console.log("Form updated" , form);
        this.getAllForms();
      });
      //this.router.navigate(['../admin/paginas']);
    }

  deleteForm(id){
    this.dataService.deleteForm(id).subscribe((form: Form)=>{
      console.log("Form deleted, ", form);
      this.getAllForms();
    });
  }

  onChangeFunnel(value){
    this.getFunnelsLevel(value);   
  }
  getFunnels(){
    this.dataService.getFunnels().subscribe((data:any[])=>{this.funnels = data;console.log(this.funnels)});
  }
  getFunnelsLevel(id){
    this.dataService.getFunnelsLevels(id).subscribe((data:any[])=>{this.funnelsLevel = data;console.log(this.funnelsLevel)});
  }
  
  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
      this.modalService.close(id);
  }
}
