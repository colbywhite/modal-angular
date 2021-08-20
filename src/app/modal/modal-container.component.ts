import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
import { ModalService, ModalState } from './modal.service';

@Component({
  selector: 'app-modal-container',
  styleUrls: ['modal-container.component.scss'],
  template: `
    <section *ngIf="open">
      <div role="dialog">
        <h1>Modal header</h1>
        <ng-container *ngIf="comp">
          <ng-template [ngComponentOutlet]="comp"></ng-template>
        </ng-container>
        <button (click)="close()">Close</button>
      </div>
    </section>

  `
})
export class ModalContainerComponent implements OnInit {
  @Output()
  public closeClicked: EventEmitter<void> = new EventEmitter<void>();
  public comp!: Type<any>;
  public open: boolean = false;

  public constructor(
    private modalSvc: ModalService,
    private changeSvc: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.modalSvc.state()
      .subscribe((state: ModalState) => {
        this.open = state.open;
        this.changeSvc.detectChanges();
        if (state.open) {
          this.comp = state.component;
        }
      });
  }

  public close(): void {
    this.closeClicked.emit();
    this.modalSvc.close();
  }
}
