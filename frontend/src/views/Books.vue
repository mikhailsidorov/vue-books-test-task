<template>
  <div class="books">
    Books
    <BooksTable :books="books" :booksIdList="booksIdList" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import BooksTable from '../components/BooksTable'

export default {
  name: 'Books',
  components: {
    BooksTable
  },
  computed: {
    ...mapState({
      booksIdList: state => state.books.booksIdList,
      books: state => state.books.books
    })
  }
}
</script>

<style></style>
