import { useState, useEffect } from 'react'
import { ShelfItem } from './ShelfItem'
import { For, Stack } from '@chakra-ui/react'

/**
 * A component that displays the user's bookshelf.
 * @returns {JSX.Element} The shelf element.
 */
export function Shelf() {
  const [shelf, setShelf] = useState()

  useEffect(() => {
    getShelf()
  }, [])

  /**
   * Fetches the user's bookshelf contents and sets the shelf variable.
   */
  async function getShelf() {
    await fetch('http://localhost:5000/shelf')
      .then((res) => {
        if (res.status >= 400) {
          throw res.statusText
        }
        return res.json()
      })
      .then((json) => {
        setShelf(json)
      })
      .catch((error) => {
        console.log(
          `Could not fetch shelf. The following error occured: ${error}`
        )
      })
  }

  return (
    <Stack style={{ transform: 'rotate(90deg)' }}>
      {shelf ? (
        <For each={shelf}>
          {(item, index) => <ShelfItem key={index} fic={item} />}
        </For>
      ) : (
        <p>Could not find shelf.</p>
      )}
    </Stack>
  )
}
