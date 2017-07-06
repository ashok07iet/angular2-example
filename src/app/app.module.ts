import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { keyupComponent } from './key-up.component';
import { AppComponent } from './app.component';
import { KeyUpComponent_v3 } from './keyup-enter.components';
import { KeyUpComponent_v4 } from './key-up-v4.component';
import { LittleTourComponent } from './little-tour.component';

@NgModule({
  imports: [BrowserModule,FormsModule],
  providers: [],
  declarations: [AppComponent,keyupComponent,KeyUpComponent_v3,KeyUpComponent_v4,LittleTourComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
