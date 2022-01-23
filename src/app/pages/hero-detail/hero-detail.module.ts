import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { SharedModule } from '@shared';

@NgModule({
  imports: [CommonModule, RouterModule, HeroDetailRoutingModule, SharedModule],
  declarations: [HeroDetailComponent],
  exports: [HeroDetailComponent],
  providers: [],
  bootstrap: [],
})
export class HeroDetailModule {}
