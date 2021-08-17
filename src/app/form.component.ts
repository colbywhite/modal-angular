import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  styles: ['pre {background-color: #ffc; padding: 5px;}'],
  template: `
    <form [formGroup]="formGroup">
      <label for="name">Name</label>
      <input id="name" type="text" formControlName="name"/>
    </form>
    <pre><code>{{formGroup.value | json}}</code></pre>
  `
})
export class FormComponent {
  public formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required]
  });

  public constructor(private fb: FormBuilder) {
  }
}
