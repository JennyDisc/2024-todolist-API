// 取出 Pinia 裡的 defineStore 方法
import { defineStore } from 'pinia'

import axios from 'axios';

// useTodolistStore 是自行定義 Pinia store 的函數，之後可以通過調用它來取得 store 實例
export const useTodolistStore = defineStore({
    // id 是定義 Store 名稱(唯一性)
    id: 'myStore',
    state: () => ({
        todoText: [],
        apiUrl: "https://todolist-on5h.onrender.com/todos",
    }),
    // actions 概念同 Vue 的 methods
    // 透過呼叫將資料存到 state 中，所以 actions 可以用來更新 state 資料的方法
    actions: {
        getTodolist() {
            axios
                .get(this.apiUrl)
                .then((res) => {
                    // console.log(res);
                    this.todoText = res.data.data;
                    // console.log(this.todoText);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addTodolist(postTodoText) {
            axios
                .post(this.apiUrl, postTodoText)
                .then(() => {
                    // console.log(res);
                    this.getTodolist();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        clearTodolist() {
            axios
                .delete(this.apiUrl)
                .then(() => {
                    // console.log(res);
                    this.getTodolist();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        delTodolist(id) {
            axios
                .delete(this.apiUrl + "/" + id)
                .then(() => {
                    // console.log(res);
                    this.getTodolist();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        patchTodolist(id, editTodoText) {
            axios
                .patch(this.apiUrl + "/" + id, { title: editTodoText })
                .then(() => {
                    // console.log(res);
                    this.getTodolist();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
})