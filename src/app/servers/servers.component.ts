import { Component, OnInit } from '@angular/core';

// Notice Component is imported above b/c again, TS doesn't know natively what @blah is
@Component({
  selector: 'app-servers',
  template: '<app-server></app-server>', // This property you must have at all times
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
