import { NgModule } from "@angular/core";
import { MaterialModule } from '../shared/material.module';

import { AboutComponent } from './about.component';

@NgModule({
    imports:[
        MaterialModule
    ],
    exports:[
        AboutComponent
    ],
    declarations:[
        AboutComponent
    ]
})
export class AboutModule{}



