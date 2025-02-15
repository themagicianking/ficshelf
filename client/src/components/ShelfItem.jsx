import PropTypes from 'prop-types'
import { LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

/**
 *
 * @param {object} fic - An object containing title, author, fandom, and link
 * @returns {JSX.Element} The simplified version of a fic displayed on the shelf
 */
export function ShelfItem({ fic }) {
  return (
    <LinkBox bg="black" color="white" p="4">
      <LinkOverlay href={fic.link} target="_blank">
        <Text>
          {fic.title} by {fic.author}
        </Text>
      </LinkOverlay>
    </LinkBox>
  )
}

ShelfItem.propTypes = {
  fic: PropTypes.object.isRequired
}
