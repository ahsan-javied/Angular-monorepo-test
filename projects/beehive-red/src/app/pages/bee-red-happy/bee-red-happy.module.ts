import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeeRedHappyRoutingModule } from './bee-red-happy-routing.module';
import { BeeRedHappyComponent } from './bee-red-happy.component';


@NgModule({
  declarations: [
    BeeRedHappyComponent
  ],
  imports: [
    CommonModule,
    BeeRedHappyRoutingModule
  ]
})
export class BeeRedHappyModule { }
