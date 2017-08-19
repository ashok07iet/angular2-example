import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'tour of Hero';
  heroes: any;
  isActive = false;
  heroesWithTrackByCountReset = 0;
  heroIdIncrement = 1;
  heroesNoTrackByCount = 0;
  heroesWithTrackByCount = 0;
  @ViewChildren('noTrackBy') heroesNoTrackBy: QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy: QueryList<ElementRef>;
  constructor() {
    this.heroes = [{ id: 100, name: 'Jhon' }, { id: 101, name: 'Rodrik' }];
  }
  ngAfterViewInit() {
    // Detect effects of NgForTrackBy
    trackChanges(this.heroesNoTrackBy,   () => this.heroesNoTrackByCount++);
    trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
  }
  resetHeroes() {
    this.heroes = [{ id: 100, name: 'Jhon' }, { id: 101, name: 'Rodrik' }];
    this.heroesWithTrackByCountReset = 0;
  }
  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }
  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }
  trackByHeroes(index: number, hero: any): number { return hero.id; }

  trackById(index: number, item: any): number { return item['id']; }
}
  // helper to track changes to viewChildren
  function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
    let oldRefs = views.toArray();
    views.changes.subscribe((changes: QueryList<ElementRef>) => {
      const changedRefs = changes.toArray();
      // Check if every changed Element is the same as old and in the same position
      const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
      if (!isSame) {
        oldRefs = changedRefs;
        // wait a tick because called after views are constructed
        setTimeout(changed, 0);
      }
    });
  }