<script setup>
import BookList from './components/BookList.vue';
import Book from './components/Book.vue'
</script>

<template>
   <div id="app">
    <div class="top">
      <h1>Book Lib    <span aria-label="Todo app icon">📝</span></h1>
  </div> 
  
    <div class="components"> 
  <BookList />
  <Book />
  </div>

</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container {
  display: flex;
  flex-direction:row;
}

.components {
  display: flex;
  flex-direction:row;
  flex-wrap: nowrap;
  align-content: left;
}
</style>
