import { Injectable } from '@angular/core';

import { Album } from './album';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  fmKey: string = "c81de470697187a4271740f9f4bfd261"
  searchOption=[]
  public albumData: Album[] 
  constructor(private http: HttpClient) { }
      
  getAlbums(input:string){
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + input.replace(/ /g,"+") + "&api_key="+this.fmKey+"&format=json");
  }
}
