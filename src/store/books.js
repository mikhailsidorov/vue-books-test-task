export default {
  state: {
    books: {},
    booksIdList: []
  },
  mutations: {
    deleteBook(state, bookId) {
      const index = state.booksIdList.findIndex(item => item === bookId)
      if (index >= 0) {
        state.booksIdList.splice(index, 1)
      }
      if (Object.keys(state.books).includes(bookId)) {
        let books = { ...state.books }
        delete books[bookId]
        state.books = books
      }
    },
    addUpdateBook(state, bookData) {
      if (!state.booksIdList.includes(bookData.id)) {
        state.booksIdList.push(bookData.id)
      }
      state.books[bookData.id] = bookData.book
    }
  }
}
