import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { InfoComponent } from './info/info.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DetailsComponent } from './products/details/details.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { ReviewDetailsComponent } from './reviews/review-details/review-details.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllreviewsComponent } from './reviews/allreviews/allreviews.component';


@NgModule({
  declarations: [
    AppComponent,
    // InfoComponent,
    ProductsComponent,
    ReviewsComponent,
    DetailsComponent,
    BrandComponent,
    CategoryComponent,
    ReviewDetailsComponent,
    AuthorComponent,
    AllreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
