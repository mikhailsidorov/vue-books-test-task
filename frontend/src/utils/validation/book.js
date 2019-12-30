export const validateBook = value => {
  return Boolean(
    validateTitle(value.title) &&
      validateAuthorName(value.author) &&
      validateNumberOfPages(value.numberOfPages) &&
      validatePublishingHouse(value.publishingHouse) &&
      validatePublishingYear(value.publishingYear) &&
      validateReleaseDate(value.releaseDate)
  )
}

export const validateTitle = value => {
  return Boolean(value && typeof value === 'string' && value.length <= 30)
}

export const validateAuthorName = value => {
  return Boolean(
    value &&
      typeof value === 'object' &&
      validateAuthorFirstName(value.firstName) &&
      validateAuthorLastName(value.lastName)
  )
}

export const validateAuthorFirstName = value => {
  return Boolean(value && typeof value === 'string' && value.length <= 20)
}

export const validateAuthorLastName = value => {
  return Boolean(value && typeof value === 'string' && value.length <= 20)
}

export const validateNumberOfPages = value => {
  value = Number(value)
  return Boolean(value && typeof value === 'number' && value > 0 && value <= 10000)
}

export const validatePublishingHouse = value => {
  return Boolean(value && typeof value === 'string' && value.length <= 30) || true
}

export const validatePublishingYear = value => {
  value = Number(value)
  return Boolean(value && typeof value === 'number') && value >= 1800
}

export const validateReleaseDate = value => {
  value = Number(value)
  const minDate = new Date(1800, 0, 1, 0, 0, 0, 0)
  return Boolean(value && new Date(value) && value >= minDate) || Boolean(!value) || false
}
