import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceTrackerComponent } from './performance-tracker/performance-tracker.component';

const routes: Routes = [{path: '',component : PerformanceTrackerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



