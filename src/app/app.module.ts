import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './pages/landing/landing.component';
import {ShopComponent} from './pages/shop/shop.component';
import {CardComponent} from './components/card/card.component';

@NgModule({
    declarations: [AppComponent, LandingComponent, ShopComponent, CardComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
