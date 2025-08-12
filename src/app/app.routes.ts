import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Detail } from './detail/detail';
import { Contact } from './contact/contact';
import { Serives } from './serives/serives';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cart', component: Cart },
    { path: 'detail', component: Detail },
    { path: 'contact', component: Contact },
    { path: 'services', component: Serives },
    { path: 'about', component: About },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

