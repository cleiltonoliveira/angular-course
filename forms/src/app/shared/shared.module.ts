import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CampoControlErroComponent, FormDebugComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [DropdownService],
  exports: [CampoControlErroComponent, FormDebugComponent]
})
export class SharedModule { }
