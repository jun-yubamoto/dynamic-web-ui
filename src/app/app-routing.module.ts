import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicExampleComponent } from './dynamic-example/dynamic-example.component';

const routes: Routes = [
  {path: 'dynamic', component: DynamicExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
