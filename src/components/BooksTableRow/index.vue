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
    <div class="books-table-cell">
      <button class="button-action" @click="handleEditClick(book.id)">Edit</button>
      <button class="button-action" @click="handleDeleteClick(book.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { validateBook } from '@/utils/validation/book'

export default {
  name: 'BooksTableRow',
  props: {
    book: {
      type: Object,
      required: true,
      validator: validateBook
    }
  },
  methods: {
    handleEditClick(bookId) {
      this.$emit('edit', bookId)
    },
    handleDeleteClick(bookId) {
      console.log(bookId)
    }
  }
}
</script>

<style lang="scss" scoped>
.books-table-row {
  display: table-row;
}

.books-table-cell {
  padding: 10px 10px 10px 10px;
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

.button-action {
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  font-size: inherit;
  background: transparent;
  &:hover {
    text-decoration: underline;
  }
}
</style>
