<template>
  <div>
    <label for="id_1">输入框1：</label>
    <input type="text" id="id_1">
    <label for="id_2">输入框2：</label>
    <input type="text" id="id_2">
  </div>
</template>
<script>
export default {
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>