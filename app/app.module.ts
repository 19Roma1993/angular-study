import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {TodoComponent} from './todo.component';
import {VoteComponent} from './vote.component';
import {Service} from './service';

import {AppRoutingModule} from './app-routing.module';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)],
    declarations: [AppComponent, TodoComponent, VoteComponent],
    providers: [Service],
    bootstrap: [AppComponent]
})
export class AppModule {

}