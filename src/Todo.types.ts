export type Todos = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type ContextType = {
  todos: Todos[];
};
