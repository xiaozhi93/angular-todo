import { Component } from '@angular/core';

interface Todo {
  title: string
  completed: boolean
}

enum filterTodo {
  All = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed'
}

const filter = {
  all: (list: Todo[]) => list,
  active: (list: Todo[]) => list.filter((todo) => !todo.completed),
  completed: (list: Todo[]) => list.filter((todo) => todo.completed),
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Angular TodoList"
  todos: Todo[] = []
  todo: string = ""
  beforeEditingText: string = ""
  editingTodo: Todo | null = null
  get allChecked(): boolean {
    return this.todos.every((item) => item.completed)
  }
  set allChecked(val: boolean) {
    this.todos = this.todos.map((item) => ({ ...item, completed: val }))
  }
  get remainingTodoCount(): number {
    return filter.active(this.todos).length
  }
  addTodo() {
    // 新增
    this.todos.push({
      title: this.todo,
      completed: false,
    })
    this.todo = ""
  }
  removeTodo(todo: Todo) {
    // 移除
    // 根据索引移除
    const index = this.todos.indexOf(todo)
    this.todos = this.todos.filter((item, i) => i !== index)
  }
  clearCompleted() {
    // 移除所有
    this.todos = this.todos.filter((item) => !item.completed)
  }
  editTodo(todo: Todo) {
    // 编辑
    console.log("双击编辑")
    this.beforeEditingText = todo.title
    this.editingTodo = todo
  }
  doneEdit(todo: Todo) {
    // 完成编辑
    todo.title = todo.title.trim()
    todo.title || this.removeTodo(todo)
    this.editingTodo = null
  }
  filterTodos(type: filterTodo) {
    // 过滤，计算属性
  }
}
