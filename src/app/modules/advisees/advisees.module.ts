import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdviseesRoutingModule } from './advisees-routing.module';
import { AdviseeComponent } from './advisee/advisee.component';
import { AdviseesComponent } from './advisees.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdviseesComponent, AdviseeComponent],
  imports: [CommonModule, AdviseesRoutingModule, SharedModule]
})
export class AdviseesModule {}
