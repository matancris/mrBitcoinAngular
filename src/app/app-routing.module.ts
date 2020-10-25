import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticComponent } from './pages/statistic/statistic.component';

const routes: Routes = [
  {path : 'contact/edit' , component : ContactEditComponent},
  {path : 'contact/:id' , component : ContactDetailsComponent},
  {path : 'contact', component: ContactPageComponent},
  {path : 'statistic' , component : StatisticComponent},
  {path : '**',component: HomePageComponent},
];

@NgModule({
  imports: [BrowserModule , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
