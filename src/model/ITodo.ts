export interface TodoProp {
  title: string;
  description?: string;
}

export default interface Todo {
  id: number;
  prop: TodoProp;
}