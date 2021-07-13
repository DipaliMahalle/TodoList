var app = new Vue(
    {
        el: '#app',
        data: {
            newTodoName: ' ',
            todoList: [{
                id: 1,
                todoName: 'Read the Book',
            },
            {
                id: 2,
                todoName: 'Done Homework',

            }]
        },
        methods: {
            AddTodoItems() {
                this.todoList.push({
                    id: this.todoList.length + 1,
                    todoName: this.newTodoName,
                });
                this.newTodoName = '';
            },
        },
    }

);