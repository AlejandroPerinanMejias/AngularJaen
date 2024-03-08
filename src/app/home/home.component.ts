import { Component, OnInit } from '@angular/core';
import { lugarModel } from '../models/lugar.model';
import { LugarService } from '../service/lugar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lugares: any[] = [];

  constructor(private _lugaresService: LugarService) {}

  ngOnInit(): void {
    this._lugaresService.getLugares().subscribe(lugares => {
      next: this.lugares = lugares;
      error:console.log;
    })
  }

  
}
