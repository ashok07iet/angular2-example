import {Component, Input, OnChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'version-child',
  templateUrl: './version-child.component.html'
})
export class VersionChild implements OnChanges {
  @Input() major: string;
  @Input() minor: string;
  changeLog: string[] = [];

  ngOnChanges(changes: { [propKey: string]: SimpleChange  }) {
    let log: string[] = [];
    for (let propName in changes) {
      if (changes.hasOwnProperty(propName)) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    }
    this.changeLog.push(log.join(', '));
  }
}
