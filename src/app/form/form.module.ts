import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [FormComponent],
  declarations: [FormComponent],
  providers: []
})
export class FormModule {
}
