import Vue from 'vue';
import Vuex from 'vuex';
import { TodoState } from './todo-state.model';
import { Todo } from '@/model/todo.model';
import { TodoService } from '@/service/todo.service';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: {},
        loading: false
    },
    getters: {
        selectAll: (state: TodoState): Todo[] => {
            return Object.keys(state.todos).map(id => state.todos[id]);
        },
        select: (state: TodoState) => (id: string): Todo => {
            return state.todos[id];
        },
        isLoading: (state: TodoState): boolean => {
            return state.loading;
        }
    },
    mutations: {
        todosLoaded: (state: TodoState, list: Todo[]) => {
            state.todos = list.reduce((acc, todo) => {
                return {
                    ...acc,
                    [todo.id]: todo
                };
            }, {});
        }
    },
    actions: {
        fetch({ commit }) {
            TodoService.getAll().then(list => {
                commit('todosLoaded', list);
            });
        }
    }
});
