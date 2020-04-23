import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hw5';

  users = [
    {name: 'Vasyl', age: 32, status: true, address: {city: 'Lviv', street: 'Shevchenko', house: 56}},
    {name: 'Petro', age: 44, status: false, address: {city: 'Lviv', street: 'Shevchenko', house: 2}},
    {name: 'Iryna', age: 21, status: false, address: {city: 'Lviv', street: 'Shevchenko', house: 68}},
    {name: 'Oleh', age: 19, status: true, address: {city: 'Lviv', street: 'Shevchenko', house: 101}},
    {name: 'Olha', age: 54, status: true, address: {city: 'Lviv', street: 'Shevchenko', house: 4}},
    {name: 'Denys', age: 29, status: false, address: {city: 'Lviv', street: 'Shevchenko', house: 16}},
    {name: 'Olexandr', age: 24, status: false, address: {city: 'Lviv', street: 'Shevchenko', house: 21}},
    {name: 'Maria', age: 36, status: true, address: {city: 'Lviv', street: 'Shevchenko', house: 74}},
    {name: 'Pavlo', age: 22, status: true, address: {city: 'Lviv', street: 'Shevchenko', house: 25}},
    {name: 'Kateryna', age: 30, status: false, address: {city: 'Lviv', street: 'Shevchenko', house: 66}}
  ];

  myDate = Date.now();
  classStatus: boolean;

  toggleClass() {
    this.classStatus = !this.classStatus;
  }
}
