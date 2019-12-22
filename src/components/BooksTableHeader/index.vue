<template>
  <div class="books-table-header">
    <div
      v-for="key in Object.keys(cellNames)"
      :key="key"
      class="books-table-header__cell"
      :class="{
        up: cellNames[key].sorting && cellNames[key].sortingType === 'up',
        down: cellNames[key].sorting && cellNames[key].sortingType === 'down',
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
  data() {
    return {
      cellNames: {
        title: { sorting: true, sortingType: null, name: 'Название' },
        author: { name: 'Автор' },
        numberOfPages: { name: 'Количество страниц' },
        publishingHouse: { name: 'Издательство' },
        publishingYear: { sorting: true, sortingType: null, name: 'Год издания' },
        releaseDate: { name: 'Дата выхода в тираж' },
        image: { name: 'Картинка' }
      }
    }
  },
  methods: {
    handleClick(key) {
      console.log(key)
      if (!this.cellNames[key].sortingType) {
        this.cellNames[key].sortingType = 'up'
      } else {
        if (this.cellNames[key].sortingType === 'up') {
          this.cellNames[key].sortingType = 'down'
        } else {
          this.cellNames[key].sortingType = null
        }
      }
      this.$emit('click', [key, this.cellNames[key].sortingType])
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
    cursor: pointer;
  }
}

.sorting {
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
  &.up::before,
  &.down::after {
    color: black;
  }
}
</style>
