import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http'
@Component({
  selector: 'app-viewallbooking',
  templateUrl: './viewallbooking.component.html',
  styleUrls: ['./viewallbooking.component.css']
})
export class ViewallbookingComponent implements OnInit {

  constructor(public as:HttpClient) { }
  booked;
  url="https://api.mlab.com/api/1/databases/vamsi/collections/Booking?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  ngOnInit() {
  }
  get(){
    this.as.get(this.url).subscribe((s)=>
    {
     this.booked=s;
    })
   }
}
