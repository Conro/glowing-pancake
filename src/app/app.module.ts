import { DummyDataService } from './Services/dummy-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileDetailComponent } from './tiles/tile-detail/tile-detail.component';
import { TileItemComponent } from './tiles/tile-item/tile-item.component';
import { TileListComponent } from './tiles/tile-list/tile-list.component';
import { HeaderComponent } from './header/header.component';
import { ChatModule } from './chat/chat.module';
import { MemberFormComponent } from './member-form/member-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    TileDetailComponent,
    TileItemComponent,
    TileListComponent,
    HeaderComponent,
    MemberFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChatModule
  ],
  providers: [DummyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
