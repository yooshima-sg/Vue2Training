import Vue from 'vue';
import App from './App.vue';

// todoMVCで共有のスタイルシートを組み込む
import '@/assets/style.css';

/**
 * エントリ―ポイント
 */
new Vue({
  render: h => h(App),
}).$mount('#app');