import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to angular';

  // Currency pipe
  amount = 2000.122;

  // Date pipe
currentdate = new Date();

//percentage pipe
percentdata = 0.098;
percentdata1 = 0.198;

//Json pipe
jsonobject = {"Name":"Santosh"}

//Custom pipe
sgdrate=55.58;

}
