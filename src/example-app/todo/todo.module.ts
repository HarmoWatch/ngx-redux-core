import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TodoListComponent } from './list/todo-list.component';
import { TodoListReducer } from './list/todo-list.reducer';
import { TodoModuleStateProvider } from './todo.module.state.provider';
import { ReduxModule } from '../../harmowatch/ngx-redux-core/redux.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReduxModule.forChild({
      state: {
        provider: TodoModuleStateProvider,
        reducers: [ TodoListReducer ],
      }
    }),
    RouterModule.forChild([
      {path: '', component: TodoListComponent},
    ]),
  ],
  declarations: [TodoListComponent],
  providers: [TodoModuleStateProvider]
})
export class TodoModule { }
