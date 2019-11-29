import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { ProfileComponent } from '../../auth/profile/profile.component';
import { PaginasComponent } from '../admin-content/paginas/paginas.component';
import { EditarComponent } from '../admin-content/paginas/editar/editar.component';
import { CriarComponent } from '../admin-content/paginas/criar/criar.component';
import { FunnelsComponent } from '../admin-content/leads/funnels/funnels.component';
import { FunnelLevelsComponent } from '../admin-content/leads/funnel-levels/funnel-levels.component';
import { PostsComponent } from '../admin-content/posts/posts.component';
import { EditarPComponent } from '../admin-content/posts/editar/editarp.component';
import { CriarPComponent } from '../admin-content/posts/criar/criarp.component';
import { LeadComponent } from '../admin-content/leads/lead/lead.component';
import { ConfiguracoesComponent } from '../admin-content/configuracoes/configuracoes.component';
import { FormsbComponent } from '../admin-content/formsb/formsb.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'admin', component: AdminComponent,canActivate:[AuthGuard], canActivateChild:[AuthGuard], children: [
          //{ path: '',  redirectTo: 'dashboard1', pathMatch: 'full' },
          { path: '', component: AdminDashboard1Component },
          { path: 'dashboard2', component: AdminDashboard2Component },
          { path: 'profile', component: ProfileComponent },

          { path: 'clientes', component: LeadComponent},
          { path: 'funils', component: FunnelsComponent},
          { path: 'funils/:id',component: FunnelLevelsComponent},


          { path: 'paginas/alterar/:id', component: EditarComponent},
          { path: 'paginas/adicionar-pagina', component: CriarComponent},
          { path: 'paginas', component: PaginasComponent, children :[
              {path: 'adicionar-pagina', component: CriarComponent},
              {path: 'alterar/:id', component: EditarComponent},
              {path : '', redirectTo:'paginas', pathMatch: 'full'},
          ]},

          { path: 'posts', component: PostsComponent},
          { path: 'posts/alterar/:id', component: EditarPComponent},
          { path: 'posts/adicionar-post', component: CriarPComponent},
          { path: 'configuracoes', component: ConfiguracoesComponent},
          { path: 'forms', component: FormsbComponent},
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
