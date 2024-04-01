<template>
  <header>
    <div class="header pb-4">
      <div class="keyin mx-4 px-3 pt-5">
        <label for="todolist" class="me-2">代辦內容</label>
        <input
          type="text"
          name="todoinput"
          id="todolist"
          placeholder="請輸入內容"
          class="mb-3"
          v-model="postTodoText.title"
        />
        <div class="d-flex justify-content-end pb-3">
          <button type="button" class="btn btn-primary" @click="addTodolist">
            新增代辦
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// 定義好的 store 賦值給變數 useTodolistStore
// 在元件中引入並呼叫 useTodolistStore() 來訪問 store
import { useTodolistStore } from "../components/TodoDataStore.js";

export default {
  data() {
    return {
      postTodoText: {
        title: "",
      },
    };
  },
  methods: {
    addTodolist() {
      if (this.postTodoText.title !== "") {
        useTodolistStore().addTodolist(this.postTodoText);
        this.initInput();
      } else {
        alert("請輸入內容!");
      }
    },
    initInput() {
      this.postTodoText.title = "";
    },
  },
};
</script>
