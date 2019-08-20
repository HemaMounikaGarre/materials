
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { SearchbyorderIdComponent } from './searchbyorder-id/searchbyorder-id.component';



const routes: Routes = [
  {path:'Search',component:SearchComponent},
  {path:'update',component:UpdateComponent},
  {path:'searchbyorder-id',component:SearchbyorderIdComponent},
  {path:'',redirectTo:'',pathMatch:'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
