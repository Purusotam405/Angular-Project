import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hotel } from './../../model/hotel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  text = 'Bhutan';
  hotels: Hotel[];
  active: Hotel;
  activeImage: string;

  constructor(private http: HttpClient,private router:Router ) {
    this.searchHotels(this.text);
  }

  searchHotels(text: string) {
    this.text = text;
    this.http.get<Hotel[]>('http://localhost:3000/hotels?q=' + text)
      .subscribe(result => {
        this.hotels = result;

        this.setActive(this.hotels[0]);
      });
  }

  setActive(hotel: Hotel) {
    this.active = hotel;
    this.activeImage = hotel.images[0];
  }

  sendEmail({ email, msg }) {
    window.alert(`'mail sent:'
    ${email}
    ${msg}
    ${this.active.email}
    `);
  }
}
