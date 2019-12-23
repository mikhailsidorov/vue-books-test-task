<template>
  <div class="books-table-header">
    <div
      v-for="key in Object.keys(cellNames)"
      :key="key"
      class="books-table-header__cell"
      :class="{
        ascending: isAscending(key),
        descending: isDescending(key),
        sorting: cellNames[key].sorting
      }"
      @click="cellNames[key].sorting ? handleClick(key) : null"
    >
      {{ cellNames[key].name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BooksTableHeader',
  props: {
    cellNames: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick(key) {
      this.$emit('sorting-switch', key)
    },
    isAscending(key) {
      return this.cellNames[key].sorting && this.cellNames[key].sortingType === 'ascending'
    },
    isDescending(key) {
      return this.cellNames[key].sorting && this.cellNames[key].sortingType === 'descending'
    }
  }
}
</script>

<style lang="scss" scoped>
.books-table-header {
  display: table-row;
  font-weight: bold;

  &__cell {
    display: table-cell;
    vertical-align: middle;
    position: relative;
    padding: 10px 30px 10px 10px;
  }
}
.sorting {
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    right: 15px;
    top: 50%;
    font-size: 10px;
    line-height: 10px;
    cursor: pointer;
    color: grey;
  }
  &::before {
    content: '▲';
    transform: translateY(-10px);
  }
  &::after {
    content: '▼';
    transform: translateY(0px);
  }
  &.ascending::before,
  &.descending::after {
    color: black;
  }
}
</style>
