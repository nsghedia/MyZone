import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperties } from 'src/app/modules/IProperties.interface';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<IProperties> = [];
  SellRent: number = 1;

  constructor(
    private housingService: HousingService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activateRoute.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      (res) => {
        this.Properties = res;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
