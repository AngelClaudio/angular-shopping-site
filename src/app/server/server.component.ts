// TS doesn't know from the start what @Component is, so you need to import it.
// We use curly braces since it could be an object with multiple elements.
import { Component } from '@angular/core';

// add decorator to enhance, and let Angular know it's a component
@Component({// pass js object {} to configure with meta data
  selector: 'app-server',
  templateUrl: './server.component.html', // must give a path, so use ./ for relative path,
  styleUrls: ['./server.component.css'],
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus(): string{
    return this.serverStatus;
  }
}
