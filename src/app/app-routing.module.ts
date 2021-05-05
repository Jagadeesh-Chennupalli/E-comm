import { BestsellarComponent } from './bestsellar/bestsellar.component';
import { ProductsgridsComponent } from './productsgrids/productsgrids.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"carosel",component:CarouselComponent},
  {path:"productgrids",component:ProductsgridsComponent},
  {path:"bestseller",component:BestsellarComponent},
  {path:"footer",component:FooterComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
