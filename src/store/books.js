export default {
  state: {
    list: [
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
  },
  actions: {},
  mutations: {
    addBook(state, book) {
      state.list.push(book)
    },
    removeBook(state, bookId) {
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
