import { Component } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Maps` component loaded asynchronously');

@Component({
  selector: 'maps',
  templateUrl: '../templates/maps.html'
})
export class MapsComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Maps` component');
  }

}

