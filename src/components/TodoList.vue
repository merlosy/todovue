<template>
  <ul>
      <li v-for="todo in selectTodos" :key="todo.id">
          <span>{{todo.id}} {{todo.title}}</span>
      </li>
  </ul>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";

@Component({
  computed: {
    ...mapGetters(["selectTodos"])
  },
  methods: {
    ...mapActions([
      "fetchTodos" // map `this.fetchTodos()` to `this.$store.dispatch('fetchTodos')`
    ])
  }
})
export default class TodoList extends Vue {
  public created() {
    this.fetchTodos();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
