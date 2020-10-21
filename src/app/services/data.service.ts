import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private data: string;
 
  constructor() { }
 
  setData(urlData: string) {
    this.data = urlData;
  }
 
  getData() {
    return this.data;
  }
}