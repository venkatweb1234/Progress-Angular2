import { Component, OnInit } from '@angular/core';
import {BarService} from './service';
import { IResults } from './results';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BarService]
})
export class AppComponent implements OnInit {
  Result:IResults[];
  width:number=0;
  constructor(private _barService: BarService){}
  ngOnInit()
  {
   this._barService.getService()
       .subscribe((serviceData)=>this.Result=serviceData);
  }
 public addWidth(event)
  {
    this.width=this.width+(Number(event.target.attributes.value.nodeValue));
    
  }
  public addEvent(event)
  {
    var e=event.value+'%';
      //var element = document.getElementById("progressBar").innerHTML;
      //if(e==element){
       // document.getElementById("progressBar").hidden=true;
     // }
  }
}
