import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      name: 'Moving on',
      artist: 'Nymano, Suuna',
      cover: 'https://chillhop.com/wp-content/uploads/2022/10/0b99c64a1316ecfb990c546ba4a73f6de27cfde5-1024x1024.jpg',
      id: uuidv4(),
      active: true,
      color: ['#D5BFE7', '#40B3EA'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=45154',
    },
    {
      name: 'Mirage',
      artist: "Nymano, j'san",
      cover: 'https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#5F5989', '#181413'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10136',
    },
    {
      name: 'Riverside',
      artist: 'SwuM, G Mills',
      cover: 'https://chillhop.com/wp-content/uploads/2022/02/3f38419a1c54c6c8bdb2a2d5785a1b518f0e5ab6-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#424D6D', '#CA324F'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=30140',
    },
    {
      name: 'Firefly Field',
      artist: 'Aso, Middle School, Aviino',
      cover: 'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#0A3B40', '#A55B2D'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10078',

    },
    {
      name: 'Keep Going',
      artist: 'Swørn',
      cover: 'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#81406C', '#DC94B1'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',

    },
    {
      name: 'Parasol',
      artist: 'Plusma, Guillaume Muschalle, Thomas Renwick',
      cover: 'https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#FEFEC1', '#BAD6CA'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=28901',

    },
    {
      name: 'The Field from Spirited Away',
      artist: 'Sleepy Fish, coa',
      cover: 'https://chillhop.com/wp-content/uploads/2022/05/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#950707', '#084643'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=36919',

    },

  ];
}

export default chillHop;
