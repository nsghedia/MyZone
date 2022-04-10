import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number = 0;
  constructor(private acvtivateRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.propertyId = +this.acvtivateRoute.snapshot.params['id'];
    this.acvtivateRoute.params.subscribe((param) => {
      this.propertyId = +param['id'];
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
