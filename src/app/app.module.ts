import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule , 
        HttpModule        
    ],
    declarations: [
        AppComponent
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
