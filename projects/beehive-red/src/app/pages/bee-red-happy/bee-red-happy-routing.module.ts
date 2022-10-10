import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeeRedHappyComponent } from './bee-red-happy.component';

const routes: Routes = [
  {path:'',component:BeeRedHappyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeeRedHappyRoutingModule { }
