import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';

@NgModule({
    imports:[
        MaterialModule
    ],
    exports:[
        NavbarComponent
    ],
    declarations:[
        NavbarComponent, 
    ]
})
export class LayoutModule{}