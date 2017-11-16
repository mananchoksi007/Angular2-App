import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>
        Hello World
        </div>
    `,
    styleUrls: [ './app.component.scss',
      '../../node_modules/angular2-busy/build/style/busy.css',
      '../../node_modules/bootstrap/dist/css/bootstrap.css' ],
    encapsulation: ViewEncapsulation.None // apply styles globally
})
export class AppComponent { }
