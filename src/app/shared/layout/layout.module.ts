//angular
import { NgModule } from '@angular/core';

//modules
import { MaterialModule } from '../material.module';
import { RouterModule } from "@angular/router";
//components
import { LayoutComponent } from "app/shared/layout/layout.component";

@NgModule({
    imports:[
        MaterialModule,
        RouterModule
    ],
    exports:[
        LayoutComponent
    ],
    declarations:[
        LayoutComponent
    ]
})
export class LayoutModule{}