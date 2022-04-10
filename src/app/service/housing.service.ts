import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IProperties } from '../modules/IProperties.interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  public properties: Array<IProperties> = [];
  public propertiesList: Array<IProperties> = [];
  constructor(private http: HttpClient) {}

  getAllProperties(SellRent: number) {
    this.propertiesList = [];
    return this.http.get('data/properties.json').pipe(
      map((res) => {
        this.properties = res as Array<IProperties>;
        this.properties.forEach((element) => {
          if (this.properties && element.SellRent === +SellRent) {
            this.propertiesList.push(element);
          }
        });
        return this.propertiesList;
      })
    );
  }
}
