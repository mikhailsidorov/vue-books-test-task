<template>
  <div class="books">
    Books
    <BooksTable :books="booksList" />
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
      booksList: state => state.books.list
    })
  }
}
</script>

<style></style>
