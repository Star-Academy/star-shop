import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {AuthComponent} from './pages/auth/auth.component';
import {ShopComponent} from './pages/shop/shop.component';

const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'shop', component: ShopComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
