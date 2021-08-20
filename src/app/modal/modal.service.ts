import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ClosedModalState {
  open: false;
}

export interface OpenModalState<T> {
  open: true;
  component: Type<T>
}

export type ModalState = ClosedModalState | OpenModalState<any>;

@Injectable({ providedIn: 'root' })
export class ModalService {
  private _state: BehaviorSubject<ModalState> = new BehaviorSubject<ModalState>({ open: false });

  public state(): Observable<ModalState> {
    return this._state.asObservable();
  }

  public open<T>(comp: Type<T>) {
    this._state.next({ open: true, component: comp });
  }

  public close() {
    this._state.next({ open: false });
  }
}
