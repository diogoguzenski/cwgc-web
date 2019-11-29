import { StarterControlSidebarComponent } from './starter-control-sidebar/starter-control-sidebar.component';
import { StarterFooterComponent } from './starter-footer/starter-footer.component';
import { StarterContentComponent } from './starter-content/starter-content.component';
import { StarterLeftSideComponent } from './starter-left-side/starter-left-side.component';
import { StarterHeaderComponent } from './starter-header/starter-header.component';
import { StarterComponent } from './starter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
  ],
  exports: [StarterComponent]
})
export class StarterModule { }
