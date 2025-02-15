import PropTypes from 'prop-types'

/**
 *
 * @param {object} fic - An object containing title, author, fandom, and link
 * @returns {JSX.Element} The simplified version of a fic displayed on the shelf
 */
export function ShelfItem({ fic }) {
  return (
    <li>
      <h3>Title: {fic.title}</h3>
      <p>Author: {fic.author}</p>
      <p>Fandom: {fic.fandom}</p>
    </li>
  )
}

ShelfItem.propTypes = {
  fic: PropTypes.object.isRequired
}
