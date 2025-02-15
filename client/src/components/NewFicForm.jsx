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

export function NewFicForm() {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <DialogRoot>
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
              <Field.Root>
                <Field.Label>Title</Field.Label>
                <Input
                  {...register('title', { required: true })}
                  placeholder="Wicked: The Life and Times of the Wicked Witch of the West"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Author</Field.Label>
                <Input
                  {...register('author', { required: true })}
                  placeholder="Gregory Maguire"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Fandom</Field.Label>
                <Input
                  {...register('fandom', { required: true })}
                  placeholder="The Wizard of Oz"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label>Link</Field.Label>
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
