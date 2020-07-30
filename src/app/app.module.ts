// A module is a bundle of functionality for the app
// Tells angular what features the app has
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // To be able to use ngModule
 // Don't need to put .TS extension (webpack does it)
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';

// Register your component in the @NgModule, b/c Angular doesn't scan your files
// to know which components exist, hence register them in declarations array
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent  // TS doesn't know what this means, that's why you have to import above
  ],
  imports: [
    BrowserModule,
    FormsModule  // After import on top, append to imports array
  ],
  providers: [],
  bootstrap: [AppComponent] // This pertains to index.html, by nature only root component is attached here
})
export class AppModule { }
