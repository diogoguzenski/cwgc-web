import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaginasComponent } from './paginas.component';
import { EditarComponent } from './editar/editar.component';
import { AdminRoutingModule } from '../../admin-routing/admin-routing.module';
import { CriarComponent } from './criar/criar.component';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaginasComponent,
    EditarComponent,
    CriarComponent
  ],
  exports: [PaginasComponent]
})
export class PaginasModule { }
