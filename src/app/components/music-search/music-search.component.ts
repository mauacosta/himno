import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MusicService } from '../../music.service'
import { Album } from '../../album'
import html2canvas from "html2canvas"

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})

export class MusicSearchComponent implements OnInit {

  comma:String = ", "

  albumControl = new FormControl()
  nameControl = new FormControl()
  filteredOptions: Observable<string[]>;
  allAlbums: Album[];
  serverResponse;
  selectedAlbum: Album;
  justSelected: boolean = false;
  name:string;

  //@ViewChild('albumInput') autocompleteInput: ElementRef;
  @Output() selectedOption = new EventEmitter();



  constructor(private musicService: MusicService) { }

  ngOnInit(): void {

    this.albumControl.valueChanges.subscribe(userInput => {
      if (userInput && !this.justSelected) {
        this.musicService.getAlbums(userInput).subscribe(response => {
          this.serverResponse = response
          this.allAlbums = []
          this.serverResponse.results.albummatches.album.forEach(album => {
            let newAlbum: Album = {
              title: album.name,
              artist: album.artist,
              cover: album.image[3]['#text']
            }
            this.allAlbums.push(newAlbum)
          });
        });
      }else{
        this.allAlbums = []
        this.justSelected = false
      }
    })

    this.nameControl.valueChanges.subscribe(userInput => {
      this.name = userInput
    })

  }

  selectAlbum(album: Album){
    this.selectedAlbum = album
    this.allAlbums = []
    this.justSelected = true
    this.selectedOption.emit(album)
  }
  
  generatePicture(){
    let div = document.getElementById('capture');
    html2canvas(div).then(
      function (canvas) {
        document
        .getElementById('output')
        .appendChild(canvas);
    })
  }
}


