import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechcampComponent } from './techcamp.component';

const routes: Routes = [
  { path: 'techcamp', component: TechcampComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechcampRoutingModule {}
