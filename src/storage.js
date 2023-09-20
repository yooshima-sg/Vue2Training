/**
 * ストレージに入出力オブジェクト
 */

const STORAGE_KEY = "todos-vuejs-2.0";

const storage = {
  uid: 0,
  fetch() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todos.forEach((todo, index) => {
      todo.id = index;
    });
    storage.uid = todos.length;
    return todos;
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

export default storage;