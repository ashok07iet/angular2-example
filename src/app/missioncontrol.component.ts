import { Component } from '@angular/core';
import { MissionService } from './mission.service';

@Component({
  selector: 'mission-controller',
  templateUrl: './mission-controller.component.html',
  providers: [MissionService]
})
export class MissionControllerComponent {
  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(astronaut=>{
      this.history.push(`${astronaut} confirm the mission`);
    });
   };
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];
  nextMission = 0;
  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
