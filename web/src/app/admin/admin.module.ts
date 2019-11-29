import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { FormsModule } from '@angular/forms';
import { PaginasModule } from './admin-content/paginas/paginas.module';
import { LeadsModule } from './admin-content/leads/leads.module';
import { PostsModule } from './admin-content/posts/posts.module';
import { ConfiguracoesModule } from './admin-content/configuracoes/configuracoes.module';
import { FormsbModule } from './admin-content/formsb/formsb.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    PaginasModule,
    LeadsModule,
    PostsModule,
    ConfiguracoesModule,
    FormsbModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
  ],

  exports: [AdminComponent]
})
export class AdminModule { }
