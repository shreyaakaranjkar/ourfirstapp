import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { SkillsetsComponent } from './components/skillsets/skillsets.component';
import { StudentsComponent } from './components/students/students.component';
import { PostsComponent } from './components/posts/posts.component';
import { TypicodetaskComponent } from './components/typicodetask/typicodetask.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    SkillsetsComponent,
    StudentsComponent,
    PostsComponent,
    TypicodetaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
