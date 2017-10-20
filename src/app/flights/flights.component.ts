import { Component, OnInit } from '@angular/core';
import { FlightsService} from './flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  providers : [FlightsService]
})
export class FlightsComponent implements OnInit {
  flights = [];
  constructor(private flightService: FlightsService) { }
  ngOnInit() {
  }
  getData(){
  this.flightService.getData()
  .subscribe(
    resFlightData => this.flights =  resFlightData
  )
  } 
}
