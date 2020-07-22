import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // To be able to use ngModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // After import on top, append to imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
