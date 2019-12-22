<template>
  <div class="books-table">
    <BooksTableHeader />
    <BooksTableRow v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import BooksTableHeader from '../BooksTableHeader'
import BooksTableRow from '../BooksTableRow'

export default {
  name: 'BooksTable',
  components: {
    BooksTableHeader,
    BooksTableRow
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
}
</style>
