import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <h1>Modal demo</h1>
      <section>
        <h2>Form outside of modal</h2>
        <app-form></app-form>
      </section>
      <section>
        <h2>Form inside of modal</h2>
        <button (click)="open()">Open modal</button>
      </section>
      <app-modal-container></app-modal-container>
    </main>
  `
})
export class AppComponent {
  public constructor(private modalSvc: ModalService) {
  }

  public open() {
    this.modalSvc.open(FormComponent);
  }
}
