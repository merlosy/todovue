import { Todo } from '@/model/todo.model';

export interface TodoState {
    todos: { [id: string]: Todo };
    loading: boolean;
}
