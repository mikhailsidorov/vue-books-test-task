<template>
  <div class="books-table">
    <Modal v-if="showModal">
      <BookForm @cancel="handleCloseForm" @add-book="handleAddBook" />
    </Modal>
    <button class="button-add-new" @click="handleAddClick">Add new</button>
    <template v-if="booksExists">
      <BooksTableHeader @sorting-switch="handleSortingSwitch" :cellNames="cellNames" />
      <BooksTableRow
        v-for="(book, index) in sortedBooks"
        :key="book.id"
        :book="book"
        :class="{ 'odd-row': isOdd(index) }"
        @delete="handleRowDelete"
      />
    </template>
    <div v-if="!booksExists" class="books-table__no-books">Ничего нет. Добавьте книги.</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import BooksTableHeader from '../BooksTableHeader'
import BooksTableRow from '../BooksTableRow'
import BookForm from '../BookForm'
import Modal from '../Modal'

export default {
  name: 'BooksTable',
  components: {
    BooksTableHeader,
    BooksTableRow,
    BookForm,
    Modal
  },
  data() {
    return {
      showModal: false,
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
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedBooks() {
      let books = [...this.books]

      if (this.cellNames.title.sortingType === 'ascending') {
        books.sort((book1, book2) => book1.title.localeCompare(book2.title))
      } else if (this.cellNames.title.sortingType === 'descending') {
        books.sort((book1, book2) => book2.title.localeCompare(book1.title))
      }

      if (this.cellNames.publishingYear.sortingType === 'ascending') {
        books = this.sortBooksByPublishingYear(books)
      } else if (this.cellNames.publishingYear.sortingType === 'descending') {
        books = this.sortBooksByPublishingYear(books, false)
      }
      return books
    },
    booksExists() {
      return Boolean(this.sortedBooks.length)
    }
  },
  methods: {
    handleSortingSwitch(key) {
      if (!this.cellNames[key].sortingType) {
        this.cellNames[key].sortingType = 'ascending'
      } else {
        if (this.cellNames[key].sortingType === 'ascending') {
          this.cellNames[key].sortingType = 'descending'
        } else {
          this.cellNames[key].sortingType = null
        }
      }
    },
    handleAddClick() {
      this.showModal = true
    },
    handleAddBook(book) {
      this.addBook(book)
      this.showModal = false
    },
    handleCloseForm() {
      this.showModal = false
    },
    handleRowDelete(bookId) {
      this.deleteBook(bookId)
    },
    sortBooksByPublishingYear(books, ascending = true) {
      let compareFunction
      if (ascending) {
        compareFunction = (book1, book2) => {
          if (book1.publishingYear > book2.publishingYear) {
            return 1
          }
          if (book1.publishingYear < book2.publishingYear) {
            return -1
          }
          return 0
        }
      } else {
        compareFunction = (book1, book2) => {
          if (book1.publishingYear > book2.publishingYear) {
            return -1
          }
          if (book1.publishingYear < book2.publishingYear) {
            return 1
          }
          return 0
        }
      }
      return books.sort(compareFunction)
    },
    isOdd(number) {
      return number % 2 === 0
    },
    ...mapMutations(['addBook', 'deleteBook'])
  }
}
</script>

<style lang="scss" scoped>
.books-table {
  width: 90%;
  margin: 0 auto;
  display: table;
  text-align: left;

  &__no-books {
    width: 100%;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
}

.odd-row {
  background: #f2f2f2;
}

.button-add-new {
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  background: #71b76c;
  font-weight: bold;
  font-size: inherit;
  color: white;

  &:hover {
    cursor: pointer;
    background: #5ea072;
  }
}
</style>
