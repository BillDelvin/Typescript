import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: string;

  constructor() { }

  ngOnInit() {
  }

  onSetTo(){
    
  }

}
