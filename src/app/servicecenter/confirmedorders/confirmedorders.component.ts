import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http'
@Component({
  selector: 'app-confirmedorders',
  templateUrl: './confirmedorders.component.html',
  styleUrls: ['./confirmedorders.component.css']
})
export class ConfirmedordersComponent implements OnInit {

  constructor(public as:HttpClient) { }
 
  ngOnInit() {
  }
 
}
