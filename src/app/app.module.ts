import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
