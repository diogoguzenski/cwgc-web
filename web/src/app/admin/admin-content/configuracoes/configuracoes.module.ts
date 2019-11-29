import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from '../../admin-routing/admin-routing.module';
import { CommonModule } from '@angular/common';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ColorPickerModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfiguracoesComponent
  ],
  exports: [ConfiguracoesComponent]
})
export class ConfiguracoesModule { }
