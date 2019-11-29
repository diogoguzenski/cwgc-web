import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../../admin-routing/admin-routing.module';
import { CommonModule } from '@angular/common';
import { LeadsComponent } from './leads.component';
import { FunnelsComponent } from './funnels/funnels.component';
import { FunnelLevelsComponent } from './funnel-levels/funnel-levels.component';
import { LeadComponent } from './lead/lead.component';
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
    LeadsComponent,
    FunnelsComponent,
    FunnelLevelsComponent,
    LeadComponent
  ],
  providers: [
    ModalService
],
  exports: [LeadsComponent]
})
export class LeadsModule { }
