import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public as:HttpClient) { }
  vname;
  vtype;
  vowner;
  vcontact;
  stype;
  yes;
  no;
  vdate;
  varea;
  vlocation;
  url="https://api.mlab.com/api/1/databases/vamsi/collections/Booking?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
bk(x){
    this.as.post(this.url,x.value).subscribe((b)=>{
      console.log(b);
      alert("Ur car is booked For Servicing")
    })
}
  ngOnInit() {
  }

}
