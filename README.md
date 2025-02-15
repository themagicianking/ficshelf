# Ficshelf

A virtual bookshelf for fanfiction.

## Installation

1. Clone into the repository on your local machine.
2. Navigate to the client directory.
3. Run ``npm i``.
4. Navigate to the server directory.
5. Run ``npm i``.
6. To start the server, run the command ``npm start``.
7. To start the client, navigate to the client directory and run ``npm run dev``.

## Usage

### Server Routes
- "/shelf": Returns an array containing the user's fics

Fic object structure:

```
fic = {
  id: 0,
  title: "Wicked: The Life and Times of the Wicked Witch of the West",
  author: "Gregory Maguire",
  fandom: "The Wizard of Oz",
  link: "
}
```

## Testing

This project does not yet have testing.

## To Do

### MVP

- [ ] Users can add a new fic to their shelf
- [ ] Users can view all the fics on their shelf

### QOL Epic

- [ ] Users can edit fics on their shelf
- [ ] Users can delete fics on their shelf

### Cosmetic Epic

- [ ] Users can change appearance of individual fic (color & font)
- [ ] Users can change to light or dark mode

### Organization Epic

- [ ] Users can sort fics on their shelf with presets
- [ ] Users can manually sort fics on their shelf
- [ ] Users can create multiple shelves

## Reference
