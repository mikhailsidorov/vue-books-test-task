<template>
  <div class="books-table-row">
    <div class="books-table-cell">{{ book.title }}</div>
    <div class="books-table-cell">{{ book.author.firstName + ' ' + book.author.lastName }}</div>
    <div class="books-table-cell">{{ book.numberOfPages }}</div>
    <div class="books-table-cell">{{ book.publishingHouse }}</div>
    <div class="books-table-cell">{{ book.publishingYear }}</div>
    <div class="books-table-cell">{{ book.releaseDate }}</div>
    <div class="books-table-cell">
      <figure class="book-image-wrapper">
        <img class="book-image" :src="book.image" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BooksTableRow',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.books-table-row {
  display: table-row;
}

.books-table-cell {
  padding: 10px 10px 10px 0;
  display: table-cell;
  vertical-align: middle;
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
