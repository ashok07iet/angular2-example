import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tour of customer';
  firstCustomer = 'john';
  isUnchaged = false;
  inputCust = 'ashok';
  customers = [{
    'customerId': 1.0,
    'FirstName': 'Marcus',
    'LastName': 'HighTower',
    'Email': 'Marcus.HighTower@acmecorp.com',
    'Address': '1234 Anywhere St.',
    'City': 'Phoenix',
    'State': {
      'Name': ' Arizona',
      'Abbreviation': 'AZ'
    },
    'Zip': 85229.0,
    'Gender': 'Male'
  },
  {
    'customerId': 2.0,
    'FirstName': 'Jesse',
    'LastName': 'Smith',
    'Email': 'Jesse.Smith@gmail.com',
    'Address': '435 Main St.',
    'City': 'Encinitas',
    'State': {
      'Name': 'California',
      'Abbreviation': 'CA'
    },
    'Zip': 85230.0,
    'Gender': 'Female'
  }];
}
