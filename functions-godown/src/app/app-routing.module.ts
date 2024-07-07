import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './features/drag-and-drop/drag-and-drop.component';
import { TalkingBotComponent } from './features/talking-bot/talking-bot.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'draganddrop', component: DragAndDropComponent},
  {path: 'talkingbot', component: TalkingBotComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
