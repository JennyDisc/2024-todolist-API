<template>
  <section>
    <div class="content mx-4 px-3 py-5">
      <div class="d-flex justify-content-between mb-3">
        <p>代辦清單</p>
        <button type="button" class="btn btn-danger" @click="clearTodolist()">
          刪除全部
        </button>
      </div>
      <ul class="ms-3">
        <li
          class="d-flex justify-content-between mb-3"
          v-for="(item, index) in getTodoText"
          :key="item.id"
        >
          <p v-if="!isEditing(index)">{{ item.title }}</p>
          <input v-else type="text" name="edit" v-model="editTodoText.title" />
          <div>
            <!-- 編輯 -->
            <!-- <button
              v-if="!isEditing(index)"
              type="button"
              class="btn btn-outline-success me-2"
              @click="editItem(index)"
            >
              編輯
            </button>
            <button
              v-else
              type="button"
              class="btn btn-outline-success me-2"
              @click="patchTodolist(item.id)"
            >
              完成
            </button> -->
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="delTodolist(item.id)"
            >
              刪除單筆
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState,mapActions } from "pinia";
// 定義好的 store 賦值給變數 useTodolistStore
// 在元件中引入並呼叫 useTodolistStore() 來訪問 store
import { useTodolistStore } from "../components/TodoDataStore.js";

export default {
  data() {
    return {
      // apiUrl: "https://todolist-on5h.onrender.com/todos",
      getTodoText: [],
      editTodoText: {
        title: "",
      },
      editIndex: -1,
    };
  },
  methods: {
    clearTodolist() {
      useTodolistStore().clearTodolist();
    },
    delTodolist(id) {
      useTodolistStore().delTodolist(id);
    },
    editItem(index) {
      this.editIndex = index;
      // 讓輸入框預設文字=更改前的文字
      this.editTodoText.title = this.getTodoText[index].title;
    },
    isEditing(index) {
      return index === this.editIndex;
    },
    // 編輯
    // patchTodolist(id) {
    //   console.log(id);
    //   console.log(this.editTodoText);
    //   axios
    //     .patch(this.apiUrl + "/" + id, { title: this.editTodoText.title })
    //     .then((res) => {
    //       console.log(res);
    //       this.getTodolist();
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    // 在 methods 引入 store 的 actions 底下的 getTodolist
    ...mapActions(useTodolistStore, ['getTodolist'])
  },
  // 在 computed 引入 store 的 state 底下的 todoText
  computed: {
    ...mapState(useTodolistStore, ["todoText"]),
  },
  watch: {
    // 監聽 store todoText 的變化，一旦內容變更就更新 getTodoText
    todoText: function (newVal) {
      this.getTodoText = newVal;
      // console.log(newVal);
    },
  },
  mounted() {
    this.getTodolist();
  },
};
</script>
