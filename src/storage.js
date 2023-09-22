/**
 * ストレージに入出力オブジェクト
 */

// ローカルストレージに保存するためのキー
const STORAGE_KEY = "todos-vuejs-2.0";

const storage = {
  uid: 0,
  
  // 保管されているTODOデータをすべて取得する
  fetch() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    // 新たにidを振るため、起点となる数値として、
    // 保存されているデータの最大id + 1を計算する
    this.uid = Math.max(0, ...todos.map(t => t.id + 1));

    return todos;
  },

  // アプリ上のTODOデータを保管する
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

export default storage;