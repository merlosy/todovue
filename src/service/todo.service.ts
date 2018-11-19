import axios, { AxiosInstance } from 'axios';
import { Todo } from '@/model/todo.model';

export class TodoService {

    public static getAll(): Promise<Todo[]> {
        return TodoService.http().get<Todo[]>('').then(response => {
            return response.data;
        });
    }

    private static http(): AxiosInstance {
        return axios.create({
            baseURL: `http://localhost:2403/todos`,
            withCredentials: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }
}
