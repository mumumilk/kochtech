import { NgModule } from "@angular/core";

import { MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule  } from "@angular/material";


@NgModule({
    imports:[
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule
    ],
    exports:[
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule
    ],
    declarations:[
        
    ]
})
export class MaterialModule{}