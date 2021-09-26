import { Injectable } from '@angular/core'

import { Item } from './item'
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient){}


  getItems(){
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY")
  }
}


