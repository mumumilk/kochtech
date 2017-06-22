import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: '**', redirectTo: 'about' }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes, { useHash: false})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRouting{}