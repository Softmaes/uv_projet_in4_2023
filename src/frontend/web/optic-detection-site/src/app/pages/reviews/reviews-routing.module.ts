import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent,
    data: {
      title: "Review"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
