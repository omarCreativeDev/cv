import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CodeSamplesComponent } from './components/code-samples/code-samples.component';
import { FindMeOnlineComponent } from './components/find-me-online/find-me-online.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProfileComponent, CodeSamplesComponent, FindMeOnlineComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
