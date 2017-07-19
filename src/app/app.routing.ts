import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LayoutComponent } from "app/shared/layout/layout.component";


const appRoutes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: 'about', component: AboutComponent, pathMatch: 'full'}
    ]},
    { path: '**', redirectTo: '' }
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