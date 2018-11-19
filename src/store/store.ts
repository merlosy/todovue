import Vue from 'vue';
import Vuex from 'vuex';
import { TodoState } from './todo-state.model';
import { Todo } from '@/model/todo.model';
import { TodoService } from '@/service/todo.service';

Vue.use(Vuex);

export default new Vuex.Store({
    // all mutation are handled inside mutation handlers in development
    strict: process.env.NODE_ENV !== 'production',
    state: {
        todos: {},
        loading: false
    },
    getters: {
        selectTodos: (state: TodoState): Todo[] => {
            return Object.keys(state.todos).map(id => state.todos[id]);
        },
        selectTodo: (state: TodoState) => (id: string): Todo => {
            return state.todos[id];
        },
        isLoading: (state: TodoState): boolean => {
            return state.loading;
        }
    },
    // always do synchronous state changes here
    mutations: {
        todosStartLoading: (state: TodoState) => {
            state.loading = true;
        },
        todosLoaded: (state: TodoState, list: Todo[]) => {
            state.todos = list.reduce((acc, todo) => {
                return {
                    ...acc,
                    [todo.id]: todo
                };
            }, {});
            state.loading = false;
        }
    },
    // asynchronous actions here
    actions: {
        fetchTodos({ commit }) {
            commit('todosStartLoading');
            TodoService.getAll().then(list => {
                commit('todosLoaded', list);
            });
        }
    }
});
