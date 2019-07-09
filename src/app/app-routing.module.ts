import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: CardComponent, pathMatch: 'full' }
=======
 { path: '', component: CardComponent, pathMatch: 'full' }
>>>>>>> 444fcdd5d455ece8c1b22e3c8de200ef4ed6547b
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }