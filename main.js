'use strict'

const { createApp } = Vue;

createApp({
    data() {
        const newTask = '';
        const taskList = [
            {
                text: 'Vue To Do List',
                done: false,
            },
            {
                text: 'Boolzapp',
                done: false,
            },
            {
                text: 'Vue Slider',
                done: false,
            },
            {
                text: 'Vue Hello',
                done: true,
            },
        ]
        return {
            taskList,
            newTask,
        }
    },
    methods: {
        deleteItem(index) {
            this.taskList.splice(index, 1)
        },
        addNewTask() {
            if (this.newTask.trim() !== '') {
                this.taskList.push(
                    {
                        text: this.newTask,
                        done: false,
                    }
                );
                this.newTask = ''
            }
        }
    }
}).mount('#app')