import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'my-voter',
  templateUrl: './voter.component.html'
})
export class VoterComponent {
  @Input() name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted: boolean = false;

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }

}
