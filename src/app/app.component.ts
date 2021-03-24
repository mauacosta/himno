import { Component, ViewChild, ElementRef } from '@angular/core';
import { Album } from './album'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'anthem';
  thisAlbum: Album


  albumSelected(event){
    console.log("Changed")
    this.thisAlbum = event
  }
}
