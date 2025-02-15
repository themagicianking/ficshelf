import PropTypes from 'prop-types'
import { Box, Text } from '@chakra-ui/react'

/**
 *
 * @param {object} fic - An object containing title, author, fandom, and link
 * @returns {JSX.Element} The simplified version of a fic displayed on the shelf
 */
export function ShelfItem({ fic }) {
  return (
    <Box bg="black" color="white" p="4">
      <Text>
        {fic.title} by {fic.author}
      </Text>
    </Box>
  )
}

ShelfItem.propTypes = {
  fic: PropTypes.object.isRequired
}
