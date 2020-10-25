import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }

  
public saveToStorage(key, val) {
  var str = JSON.stringify(val);
  localStorage.setItem(key, str)
}

public loadFromStorage(key) {
  var str = localStorage.getItem(key);
  var val = JSON.parse(str)
  return val;
}
}
