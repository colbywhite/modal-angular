import { NgModule } from '@angular/core';
import { ModalContainerComponent } from './modal-container.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [ModalContainerComponent],
  providers: [ModalService]
})
export class ModalModule {
}
