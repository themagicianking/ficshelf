import { Button, Field, Input, Stack } from '@chakra-ui/react'
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

export function NewFicForm() {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outline" size="md">
          Open Dialog
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Fic</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <form>
            <Stack>
              <Field.Root>
                <Field.Label>Title</Field.Label>
                <Input placeholder="Wicked: The Life and Times of the Wicked Witch of the West" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Author</Field.Label>
                <Input placeholder="Gregory Maguire" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Fandom</Field.Label>
                <Input placeholder="The Wizard of Oz" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Link</Field.Label>
                <Input placeholder="archiveofourown.org" />
              </Field.Root>
            </Stack>
          </form>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button>Submit</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
