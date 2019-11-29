import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../../admin-routing/admin-routing.module';
import { CommonModule } from '@angular/common';
import { FormsbComponent } from './formsb.component';
import { ModalService } from '../../services/modal.service';
import { ModalModule } from '../../directives/modal.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ModalModule
  ],
  declarations: [
    FormsbComponent
  ],
  providers: [
    ModalService
],
  exports: [FormsbComponent]
})
export class FormsbModule { }
