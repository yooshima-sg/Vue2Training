import filters from '@/filters.js';

/**
 * Vueオブジェクトの外部の影響を取り込むための変数定義
 */
const extern = {
    visibility: {
      value: "all"
    },
}

window.addEventListener("hashchange", () => {
  const visibility = window.location.hash.replace(/#\/?/, "");
  if (filters[visibility]) {
    extern.visibility.value = visibility;
  } else {
    window.location.hash = "";
    extern.visibility.value = "all";
  }
});

export default extern;