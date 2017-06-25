

import { Component, OnInit } from '@angular/core'
import { DataStorageService } from "app/services/data-storage.service";
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    
    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService,
                private router: Router) { }


    ngOnInit(): void {
        
    }

    saveData() {
        this.dataStorageService.storeData();
    }

    fetchData() {
        this.dataStorageService.fetchData();
        this.router.navigate(['/recipes']);
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/signin']);
    }

}
