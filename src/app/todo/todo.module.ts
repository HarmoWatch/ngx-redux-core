import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReduxModule } from '../../ngx-redux/module';
import { TodoListComponent } from './list/todo-list.component';
import { TodoStateProvider } from './state/todo-state.provider';
import { TodoStateReducer } from './state/todo-state.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReduxModule.forChild({
      state: {
        provider: TodoStateProvider,
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
