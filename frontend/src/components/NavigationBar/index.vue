<template>
  <div class="navbar">
    <router-link class="navbar-link" to="/">Home</router-link>
    <router-link class="navbar-link" to="/books">Books</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style>
.navbar {
  display: flex;
  padding: 20px;
}

.navbar-link {
  text-decoration: none;
  margin-right: 20px;
}
</style>
