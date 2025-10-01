import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { MatList, MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Skills,
    Projects,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    DatePipe,
    TitleCasePipe,
    MatListModule,
   MatSidenavModule,
   MatToolbarModule
    
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
