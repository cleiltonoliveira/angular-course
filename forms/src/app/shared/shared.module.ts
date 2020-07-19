import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CampoControlErroComponent, FormDebugComponent, ErrorMsgComponent, InputFieldComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  providers: [DropdownService],
  exports: [CampoControlErroComponent, FormDebugComponent, ErrorMsgComponent, InputFieldComponent]
})
export class SharedModule { }
