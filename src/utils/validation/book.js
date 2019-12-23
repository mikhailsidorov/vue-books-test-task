export const validateBook = value => {
  return Boolean(
    validateTitle(value.title) &&
      validateAuthorName(value.author) &&
      validateNumberOfPages(value.numberOfPages) &&
      validatePublishingHouse(value.publishingHouse) &&
      validatePublishingYear(value.publishingYear)
  )
}

export const validateTitle = value => {
  return value && typeof value === 'string' && value.length <= 30
}

export const validateAuthorName = value => {
  return (
    value &&
    typeof value === 'object' &&
    validateAuthorFirstName(value.firstName) &&
    validateAuthorLastName(value.lastName)
  )
}

export const validateAuthorFirstName = value => {
  return value && typeof value === 'string' && value.length <= 20
}

export const validateAuthorLastName = value => {
  return typeof value === 'string' && value.length <= 20
}

export const validateNumberOfPages = value => {
  return value && typeof value === 'number' && value > 0 && value <= 10000
}

export const validatePublishingHouse = value => {
  return (value && typeof value === 'string' && value.length <= 30) || true
}

export const validatePublishingYear = value => {
  return value && typeof value === 'number' && value >= 1800
}
