import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GabrielHeaderComponent } from './components/gabriel-header/gabriel-header.component';
import { GabrielTimerComponent } from './components/gabriel-timer/gabriel-timer.component';
import { GabrielSimpleInterestsComponent } from './components/gabriel-simple-interests/gabriel-simple-interests.component';
import { GabrielCompoundInterestsComponent } from './components/gabriel-compound-interests/gabriel-compound-interests.component';
import { GabrielRandomNumbersComponent } from './components/gabriel-random-numbers/gabriel-random-numbers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GabrielHeaderComponent, GabrielTimerComponent, GabrielSimpleInterestsComponent,GabrielCompoundInterestsComponent, GabrielRandomNumbersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
