import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { AllBookService } from '../service/all-book.service';
import { from } from 'rxjs';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // LayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent,
      },
    ]),
  ],
})
export class HomePageModule {}
