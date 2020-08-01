import { Component, OnInit } from '@angular/core';

// Notice Component is imported above b/c again, TS doesn't know natively what @blah is
@Component({
  selector: 'app-servers',
  templateUrl:  './servers.component.html', // This property you must have at all times
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Server Test';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

onCreateServer(): void {
  this.serverCreationStatus = 'Server was created!' + this.serverName;
}

// onUpdateServerName(event: Event): void {
//  this.serverName = (event.target as HTMLInputElement).value;
// }

}
