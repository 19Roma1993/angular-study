import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {TodoComponent} from './todo.component';
import {VoteComponent} from './vote.component';

const routes:Routes = [
    {path: 'todo', component: TodoComponent},
    {path: 'vote', component: VoteComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}