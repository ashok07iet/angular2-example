import {Component} from '@angular/core';
@Component({
  selector: 'version-parent',
  templateUrl: './version-parent.component.html'
})
export class VersionParent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
