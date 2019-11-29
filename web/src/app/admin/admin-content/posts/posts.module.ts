import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostsComponent } from './posts.component';
import { AdminRoutingModule } from '../../admin-routing/admin-routing.module';
import { CommonModule } from '@angular/common';
import { EditarPComponent } from './editar/editarp.component';
import { CriarPComponent } from './criar/criarp.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    EditorModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostsComponent,
    EditarPComponent,
    CriarPComponent,

  ],
  exports: [PostsComponent]
})
export class PostsModule { }
