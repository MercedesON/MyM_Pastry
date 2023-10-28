import { Component, OnInit } from '@angular/core';
import { Cake } from 'src/app/interfaces/cake';
import { CakeService } from 'src/app/services/cake.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listCake: Cake[] = []

  constructor(private _cakeService: CakeService) { }

  ngOnInit(): void {
    this.getCakes();
  }

  getCakes() {
    this._cakeService.getCakes().subscribe(data => {
      this.listCake = data;
    })
  }

}
