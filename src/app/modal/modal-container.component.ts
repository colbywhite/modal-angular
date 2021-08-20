import {
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ModalService, ModalState } from './modal.service';

@Component({
  selector: 'app-modal-container',
  styleUrls: ['modal-container.component.scss'],
  template: `
    <section *ngIf="open">
      <div role="dialog" (click)="$event.stopPropagation()">
        <button class="close" type="button" (click)="close()">
          X
        </button>
        <h1>Modal header</h1>
        <div #container></div>
      </div>
    </section>
  `
})
export class ModalContainerComponent implements OnInit {
  public open: boolean = false;
  @ViewChild('container', { read: ViewContainerRef })
  private container!: ViewContainerRef;

  public constructor(
    private resolver: ComponentFactoryResolver,
    private modalSvc: ModalService,
    private changeDetector: ChangeDetectorRef
  ) {
  }

  public ngOnInit() {
    this.modalSvc.state()
      .subscribe((state: ModalState) => {
        this.open = state.open;
        // force change detection in order for container to be present when open is flipped to true
        this.changeDetector.detectChanges();
        if (state.open && this.container) {
          const injector: Injector = Injector.create({ providers: [] });
          const factory: ComponentFactory<ModalContainerComponent> = this.resolver.resolveComponentFactory(state.component);
          const componentRef: ComponentRef<ModalContainerComponent> = factory.create(injector);
          this.container.insert(componentRef.hostView);
        }
      });
  }

  public close() {
    this.modalSvc.close();
  }
}
