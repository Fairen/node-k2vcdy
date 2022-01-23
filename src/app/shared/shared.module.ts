import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent, MessagesComponent } from './components';
import { HeroService, MessageService, InMemoryDataService } from './services';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [HeroSearchComponent, MessagesComponent],
  exports: [HeroSearchComponent, MessagesComponent, FormsModule],
  providers: [HeroService, MessageService, InMemoryDataService],
  bootstrap: [],
})
export class SharedModule {}
