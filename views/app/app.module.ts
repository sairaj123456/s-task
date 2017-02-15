import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import { RouterModule }   from '@angular/router';
import { DashboardComponent }   from './component/dashboard.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent,DashboardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        component: DashboardComponent 
      },

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}