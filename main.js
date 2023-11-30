'use strict'

const { createApp } = Vue;

createApp({
    data() {
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
        }
    },
    methods: {
        deleteItem(index) {
            this.taskList.splice(index, 1)
        }
    }
}).mount('#app')