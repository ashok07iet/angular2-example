import { Component, Input } from '@angular/core';
@Component({
  selector: 'name-child',
  templateUrl: './name-child.component.html'
})
export class NameChild {
  private _name: string = '';
  @Input() set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string {
    return this._name;
  }
}
