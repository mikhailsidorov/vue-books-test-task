<template>
  <div class="books-table">
    <Modal v-if="showModal">
      <BookForm @cancel="handleCloseForm" @save-book="handleSaveBook" :editedBookData="editedBookData" />
    </Modal>
    <button class="button-add-new" @click="handleAddClick">Добавить</button>
    <template v-if="booksExists">
      <BooksTableHeader @sorting-switch="handleSortingSwitch" :cellNames="cellNames" />
      <BooksTableRow
        v-for="(bookId, index) in sortedBooksIdList"
        :key="bookId"
        :book="books[bookId]"
        :class="{ 'odd-row': isOdd(index) }"
        @delete="handleRowDelete(bookId)"
        @edit="handleRowEdit"
        :bookId="bookId"
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
      },
      isEditMode: false,
      editedBookData: null
    }
  },
  props: {
    books: {
      type: Object,
      required: true
    },
    booksIdList: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedBooksIdList() {
      let booksIdList = [...this.booksIdList]

      if (this.cellNames.title.sortingType === 'ascending') {
        booksIdList.sort((bookId1, bookId2) => this.books[bookId1].title.localeCompare(this.books[bookId2].title))
      } else if (this.cellNames.title.sortingType === 'descending') {
        booksIdList.sort((bookId1, bookId2) => this.books[bookId2].title.localeCompare(this.books[bookId1].title))
      }

      if (this.cellNames.publishingYear.sortingType === 'ascending') {
        booksIdList = this.sortBooksByPublishingYear(booksIdList)
      } else if (this.cellNames.publishingYear.sortingType === 'descending') {
        booksIdList = this.sortBooksByPublishingYear(booksIdList, false)
      }
      return booksIdList
    },
    booksExists() {
      return Boolean(this.sortedBooksIdList.length)
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

    handleSaveBook(bookData) {
      if (this.isEditMode) {
        this.isEditMode = false
        this.editedBookData = null
      }
      this.addUpdateBook(bookData)
      this.showModal = false
    },

    handleCloseForm() {
      this.showModal = false
    },

    handleRowDelete(bookId) {
      this.deleteBook(bookId)
    },

    handleRowEdit(editedBookData) {
      this.isEditMode = true
      this.editedBookData = editedBookData
      this.showModal = true
    },

    sortBooksByPublishingYear(booksIdList, ascending = true) {
      let compareFunction
      if (ascending) {
        compareFunction = (bookId1, bookId2) => {
          if (bookId1.publishingYear > bookId2.publishingYear) {
            return 1
          }
          if (bookId1.publishingYear < bookId2.publishingYear) {
            return -1
          }
          return 0
        }
      } else {
        compareFunction = (bookId1, bookId2) => {
          if (this.books[bookId1].publishingYear > this.books[bookId2].publishingYear) {
            return -1
          }
          if (this.books[bookId1].publishingYear < this.books[bookId2].publishingYear) {
            return 1
          }
          return 0
        }
      }
      return booksIdList.sort(compareFunction)
    },

    isOdd(number) {
      return number % 2 === 0
    },

    ...mapMutations(['addUpdateBook', 'deleteBook'])
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
