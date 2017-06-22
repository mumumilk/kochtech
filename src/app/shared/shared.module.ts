import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { NavbarComponent } from "./layout/navbar/navbar.component";

@NgModule({
    imports:[

    ],
    exports:[
        MaterialModule,
        NavbarComponent
    ],
    declarations:[
        NavbarComponent,
        
    ]
})
export class SharedModule{}