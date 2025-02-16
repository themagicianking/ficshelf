DROP TABLE IF EXISTS fics;

CREATE TABLE fics (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  fandom VARCHAR(255),
  link VARCHAR(1000),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Seeding the database with sample fics
INSERT INTO
  fics (title, author, fandom, link)
VALUES
  (
    'A Court of Tea and Deceit',
    'wendigo619',
    'Alice (TV 2009)',
    'https://archiveofourown.org/works/61843738'
  ),
  (
    'We Were Good, We Were Gold',
    'calico_sky',
    'Star Wars',
    'https://archiveofourown.org/works/63087898'
  ),
  (
    'Dream Demon',
    'Al3xand3r',
    'Supernatural (TV 2005)',
    'https://archiveofourown.org/works/63089866'
  ),
  (
    'Time''s like a Bomb',
    'F_Sensei',
    'Arcane: League of Legends (Cartoon 2021)',
    'https://archiveofourown.org/works/61861171'
  ),
  (
    'See You later,
    Monty Gator',
    'ClownMcGown',
    'Five Nights at Freddy''s',
    'https://archiveofourown.org/works/63090010'
  )