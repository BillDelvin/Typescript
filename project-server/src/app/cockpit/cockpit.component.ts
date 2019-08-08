import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverElement = [];
  newServerName="";
  newServerContent="";

  constructor() { }

  ngOnInit() {
  }

  addServer(){
    this.serverElement.push({
      type:'server',
      name:this.newServerName,
      content: this.newServerContent
    })
  }

  onAddBlueprint(){
    this.serverElement.push({
      type:'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    })
  }

}
