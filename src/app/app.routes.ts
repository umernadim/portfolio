import { Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'',component: Home},
    {path:'project',component: Projects}
];
