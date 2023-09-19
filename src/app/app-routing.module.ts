import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TechcampComponent } from './techcamp/techcamp.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'techcamp', component: TechcampComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
