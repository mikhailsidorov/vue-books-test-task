<template>
  <div class="layout">
    <NavigationBar />
    <slot></slot>
  </div>
</template>

<script>
import NavigationBar from '../NavigationBar'

export default {
  name: 'Layout',
  components: {
    NavigationBar
  }
}
</script>

<style></style>
