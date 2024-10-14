import { contactValidator } from '../../js/libs/validator.js'
import { header } from '../../js/components/header.js'
import { map } from '../../js/pages/map/map.js'

document.addEventListener('DOMContentLoaded', () => {
  header()
  contactValidator()
  map()
})
