import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {

    const message = `${this.firstname} ${this.lastname}`

    // Takes all the fields and values
    alert(`Thanks for contacting us ${this.firstname} ${this.lastname}.`)
  }

}
