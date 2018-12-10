import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserService} from './user.service';
import { AppComponent } from './app.component';
import { userComponent } from './users.component';

@NgModule({
  declarations: [
    AppComponent,userComponent ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
