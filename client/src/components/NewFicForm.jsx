// to do: add custom required messages
// to do: erase form data on dialogue close
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button, Field, Input, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

/**
 * A component that holds the form dialogue for adding a new fic.
 * @returns {JSX.Element} The new fic element.
 */
export function NewFicForm() {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  /**
   *
   * @param {object} newFic - An object containing title, author, fandom, and link
   */
  async function postFic(newFic) {
    await fetch(`http://localhost:5000/fic`, {
      method: 'POST',
      body: JSON.stringify(newFic),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.status >= 400) {
          throw res.status
        }
        console.log(`Fic has been created, server sent response: ${res.status}`)
      })
      .catch((error) => {
        console.log(
          `Could not create fic. The following error ocurred: ${error}`
        )
      })
  }

  const onSubmit = handleSubmit((data) => {
    setOpen(!open)
    postFic(data)
    reset()
  })

  return (
    <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DialogTrigger asChild>
        <Button variant="outline" size="md">
          ADD
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Fic</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <DialogBody>
            <Stack>
              <Field.Root required>
                <Field.Label>
                  Title
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  {...register('title', { required: true })}
                  placeholder="Wicked: The Life and Times of the Wicked Witch of the West"
                />
              </Field.Root>
              <Field.Root required>
                <Field.Label>
                  Author
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  {...register('author', { required: true })}
                  placeholder="Gregory Maguire"
                />
              </Field.Root>
              <Field.Root required>
                <Field.Label>
                  Fandom
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  {...register('fandom', { required: true })}
                  placeholder="The Wizard of Oz"
                />
              </Field.Root>
              <Field.Root required>
                <Field.Label>
                  Link
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  {...register('link', { required: true })}
                  placeholder="archiveofourown.org"
                />
              </Field.Root>
            </Stack>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            <Button type="submit" onSubmit={handleSubmit}>
              Submit
            </Button>
          </DialogFooter>
        </form>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
