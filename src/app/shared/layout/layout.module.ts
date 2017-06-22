//angular
import { NgModule } from '@angular/core';

//modules
import { MaterialModule } from '../material.module';

//components
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports:[
        MaterialModule
    ],
    exports:[
        NavbarComponent,
        FooterComponent
    ],
    declarations:[
        NavbarComponent,
        FooterComponent
    ]
})
export class LayoutModule{}