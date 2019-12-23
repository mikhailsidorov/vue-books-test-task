<template>
  <div class="books">
    Books
    <BooksTable :books="books" />
  </div>
</template>

<script>
import BooksTable from '../components/BooksTable'

export default {
  name: 'Books',
  components: {
    BooksTable
  },
  props: {
    books: {
      type: Array,
      default: () => [
        {
          id: 1,
          title: 'Book 1',
          author: {
            firstName: 'John',
            lastName: 'Doe'
          },
          numberOfPages: 163,
          publishingHouse: 'O`Relly',
          publishingYear: 2029,
          releaseDate: '2029-10-10',
          image: 'https://via.placeholder.com/300x450'
        },
        {
          id: 2,
          title: 'Book 2',
          author: {
            firstName: 'John',
            lastName: 'Doe'
          },
          numberOfPages: 153,
          publishingHouse: 'O`Relly',
          publishingYear: 2010,
          releaseDate: '2010-10-10',
          image: 'https://via.placeholder.com/300x450'
        },
        {
          id: 3,
          title: 'Book 3',
          author: {
            firstName: 'John',
            lastName: 'Doe'
          },
          numberOfPages: 153,
          publishingHouse: 'O`Relly',
          publishingYear: 2012,
          releaseDate: '2012-10-10',
          image: 'https://via.placeholder.com/300x450'
        }
      ]
    }
  }
}
</script>

<style></style>
