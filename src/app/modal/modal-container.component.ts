import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Inject,
  Injector,
  Output,
  Renderer2,
  StaticProvider,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MODAL_CONTENT_COMPONENT, MODAL_CONTENT_PROVIDERS } from './modal.service';

@Component({
  selector: 'app-modal-container',
  styleUrls: ['modal-container.component.scss'],
  template: `
    <div role="dialog">
      <h1>Modal header</h1>
      <div #container></div>
      <button (click)="close()">Close</button>
    </div>
  `
})
export class ModalContainerComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  private container!: ViewContainerRef;
  @Output()
  public closeClicked: EventEmitter<void> = new EventEmitter<void>();

  public constructor(
    private resolver: ComponentFactoryResolver,
    @Inject(MODAL_CONTENT_COMPONENT) private contentComponent: Type<any>,
    @Inject(MODAL_CONTENT_PROVIDERS) private contentProviders: StaticProvider[],
    private renderer: Renderer2
  ) {
  }

  public ngAfterViewInit(): void {
    const injector: Injector = Injector.create({ providers: this.contentProviders });
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.contentComponent);
    const componentRef: ComponentRef<any> = factory.create(injector);
    this.renderer.appendChild(
      this.container.element.nativeElement,
      componentRef.location.nativeElement
    );
  }

  public close(): void {
    this.closeClicked.emit();
  }
}
