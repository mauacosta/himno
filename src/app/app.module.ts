import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicSearchComponent } from './components/music-search/music-search.component';
import { MusicService } from "./music.service";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicSearchComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MusicService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
