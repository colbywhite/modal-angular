import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
