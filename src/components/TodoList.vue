<template>
  <ul>
      <li v-for="todo in todos" :key="todo.id">
          <span>{{todo.id}}</span>
      </li>
  </ul>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoList extends Vue {
  public created() {
    console.log("createdTodoList");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
