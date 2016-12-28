import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { MapsComponent } from './components/maps';
import { NoContentComponent } from './components/no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  
  { path: 'maps', component: MapsComponent },
  { path: '**',    component: NoContentComponent },
];
