import {Component} from '@angular/core';
@Component({
  selector: 'vote-taker',
  templateUrl: './vote-taker.component.html'
})
export class VoteTakerComponent {
  agreed: number = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
