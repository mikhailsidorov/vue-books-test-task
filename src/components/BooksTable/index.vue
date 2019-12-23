<template>
  <div class="books-table">
    <button class="button-add-new" @click="handleAddClick">Add new</button>
    <BooksTableHeader @sorting-switch="handleSortingSwitch" :cellNames="cellNames" />
    <BooksTableRow
      v-for="(book, index) in sortedBooks"
      :key="book.id"
      :book="book"
      :class="{ 'odd-row': index % 2 === 0 }"
    />
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
      console.log('Add click')
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
