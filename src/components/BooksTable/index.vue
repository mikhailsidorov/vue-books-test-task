<template>
  <div class="books-table">
    <BooksTableHeader />
    <div v-for="book in books" :key="book.id" class="books-table__row">
      <div class="books-table__cell">{{ book.title }}</div>
      <div class="books-table__cell">{{ book.author.firstName + ' ' + book.author.lastName }}</div>
      <div class="books-table__cell">{{ book.numberOfPages }}</div>
      <div class="books-table__cell">{{ book.publishingHouse }}</div>
      <div class="books-table__cell">{{ book.publishingYear }}</div>
      <div class="books-table__cell">{{ book.releaseDate }}</div>
      <div class="books-table__cell">
        <figure class="book-image-wrapper">
          <img class="book-image" :src="book.image" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import BooksTableHeader from '../BookTableHeader'

export default {
  name: 'BooksTable',
  components: {
    BooksTableHeader
  },
  props: {
    books: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.books-table {
  width: 90%;
  margin: 0 auto;
  display: table;
  text-align: left;

  &__row {
    display: table-row;
  }

  &__cell {
    padding: 10px 10px 10px 0;
    display: table-cell;
    vertical-align: middle;
  }
}

.book-image-wrapper {
  width: 40px;
  height: 40px;
  margin: 0;
}

.book-image {
  width: 100%;
  height: 100%;
}
</style>
