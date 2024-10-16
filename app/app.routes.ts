import { Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout/layout.component";
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join/join.component';
import { DiscoverComponent } from './discover/discover/discover.component';


export const routes: Routes = [
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'join', component: JoinComponent },
          { path: 'discover', component: DiscoverComponent },
          { path: '', component: HomeComponent, /*redirectTo: '',*/ pathMatch: 'full'}, 
        ],
      },
    ];