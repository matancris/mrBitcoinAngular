import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { HeaderComponent } from './cmps/header/header.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsComponent,
    StatisticComponent,
    ContactListComponent,
    ChartComponent,
    ContactFilterComponent,
    ContactPreviewComponent,
    HeaderComponent,
    ContactEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
