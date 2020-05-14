import {APIGatewayEvent, Context, Callback} from 'aws-lambda';
import ITodo from '../../model/ITodo';

const todos: ITodo[] = [
  {
    "id": 0,
    "prop": {
      "title": "Task 1",
      "description": "This is task 1."
    }
  },
  {
    "id": 1,
    "prop": {
      "title": "Task 2",
      "description": "This is task 2."
    }
  }
];

export function getList(event: APIGatewayEvent, context: Context, callback: Callback) {
  callback(null, {
    statusCode: '200',
    body: todos
  });
}
