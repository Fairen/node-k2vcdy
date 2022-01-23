import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '@shared';

@NgModule({
  imports: [CommonModule, RouterModule, HeroesRoutingModule, SharedModule],
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
  providers: [],
  bootstrap: [],
})
export class HeroesModule {}
