<template>
<div class="container">
  <h2>slot子组件的标题！</h2>
 <header>
    <slot name="header">name属性设置句名</slot>
  </header>
  <main>
    <slot name="content">没有东西插入时显示文字</slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

</div>

</template>
<script>
export default {
}
</script>
<style lang="scss">

</style>
