export default {
  state: {
    list: []
  },
  actions: {},
  mutations: {
    addBook(state, book) {
      state.list.push(book)
    },
    deleteBook(state, bookId) {
      const index = state.list.findIndex(book => {
        return book.id === bookId
      })
      state.list.splice(index, 1)
    },
    updateBook(state, bookId, newData) {
      const index = state.list.findIndex(book => {
        return book.id === bookId
      })
      state.list[index] = { ...this.state.list[index], ...newData }
    }
  }
}
