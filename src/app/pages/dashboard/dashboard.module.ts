import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@shared';

@NgModule({
  imports: [CommonModule, RouterModule, DashboardRoutingModule, SharedModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [],
  bootstrap: [],
})
export class DashboardModule {}
