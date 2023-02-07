import { Routes, RouterModule} from '@angular/router';

//Importar componentes//

import { Page01Component } from './page01.component/page01.component';
import { Page02Component } from './page02.component/page02.component'
import { Page03Component } from './page03.component/page03.component'
import { ModuleWithProviders } from '@angular/compiler/src/core';

const appRoutes: Routes = [
    {path: '', component: Page01Component},
    {path: 'page', component: Page01Component},
    {path: 'page2', component: Page02Component},
    {path: 'page3', component: Page03Component},
    {path: '**', component: Page01Component},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);