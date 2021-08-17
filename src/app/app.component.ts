import { Component, ViewContainerRef } from '@angular/core';
import { FormComponent } from './form.component';
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
    </main>
  `
})
export class AppComponent {
  public constructor(private modalSvc: ModalService, private viewContainer: ViewContainerRef) {
  }

  public open() {
    this.modalSvc.open(this.viewContainer, FormComponent);
  }
}
