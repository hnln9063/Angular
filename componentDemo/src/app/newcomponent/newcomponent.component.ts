import { Component } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})

export class NewcomponentComponent {
  title:String = "newcomponent";
  show(name : String):void {
    alert("Hello! "+name);
  };
}
