import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalContainerComponent } from './modal-container.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [BrowserModule],
  exports: [
    ModalContainerComponent
  ],
  declarations: [ModalContainerComponent],
  providers: [ModalService]
})
export class ModalModule {
}
