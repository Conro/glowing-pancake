import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileDetailComponent } from './tiles/tile-detail/tile-detail.component';
import { TileItemComponent } from './tiles/tile-item/tile-item.component';
import { TileListComponent } from './tiles/tile-list/tile-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    TileDetailComponent,
    TileItemComponent,
    TileListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
