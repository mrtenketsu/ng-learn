

import { Component, OnInit } from '@angular/core'
import * as firebase from 'firebase';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    
    ngOnInit(): void {
        firebase.initializeApp({
            apiKey: "AIzaSyB92uboHMeX51ZpNmRkZXgUgAvJZ58uPfQ",
            authDomain: "ng-recipe-book-13242.firebaseapp.com"
        });
    }

}