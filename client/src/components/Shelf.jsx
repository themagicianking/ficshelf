import { useState, useEffect } from 'react'

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
        setShelf(JSON.stringify(json))
      })
      .catch((error) => {
        console.log(
          `Could not fetch shelf. The following error occured: ${error}`
        )
      })
  }

  return (
    <>
      {shelf ? (
        <div>
          <h2>Here is your shelf.</h2>
          <div>{shelf}</div>
        </div>
      ) : (
        <p>Could not find shelf.</p>
      )}
    </>
  )
}
