import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReduxModule } from '@harmowatch/ngx-redux-core';
import { TodoListComponent } from './list/todo-list.component';
import { TodoStateReducer } from './state/todo-state.reducer';
import { TodoModuleStateProvider } from './todo.module.state.provider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReduxModule.forChild({
      state: {
        provider: TodoModuleStateProvider,
        reducers: [ TodoStateReducer ],
      }
    }),
    RouterModule.forChild([
      {path: '', component: TodoListComponent},
    ]),
  ],
  declarations: [TodoListComponent],
})
export class TodoModule { }
