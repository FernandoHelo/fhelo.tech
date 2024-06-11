export const projects = [
  { 
    slug: 'spumma',
    title: 'Spumma',
    description: 'Spumma is an IoT project that provides a POS for a laundry bussines. Spumma uses ESP32 powered devices to control and monitor laundry machines. It uses MQTT to communicate between devices and a server. The server is built with PHP and MariaDB. The frontend is built with Bootstrap. The project also has a Python script that bridges the communication between the devices and the server. I uses Web Socket to display the machine status in real time.',
    technologies: ['php', 'bootstrap', 'mariadb', 'node.js', 'python', 'esp32', 'mqtt'],
  },
  {
    slug: '3d-tour',
    title: '3D and AR Interactive Tour',
    description: "This project was developed for a real estate company. It is a 3D and AR interactive tour that allows the user to explore the property in 3D and AR. The project was built using Three.js and Vite. The 3D models were created with Blender and the AR was built with Google's model-viewer.",
    technologies: ['vite', 'three.js', 'blender'],
  },
  {
    slug: 'xhalata',
    title: 'Xhalata',
    description: 'Xhalata is a landing page for a real state developer company. It was built to show the users the kind of appartmens that they offer in a new development at Punta de Mita, Nayarit. The project was built using Astro for performance and Supabase to store the models and manage suer subscriptions.',
    technologies: ['astro', 'preact', 'three.js', 'supabase', 'mapbox'],
  },
  {
    slug: 'my-om',
    title: 'My OM Assistant',
    description: 'My OM Assistant is a voice assistant that helps you monitor and understand the state of buildings. It is paired with a Digital Twin that allows you to see the building in 3D and AR.',
    technologies: ['python', 'openai', 'mqtt', 'three.js'],
  }
];

export const availableTechnologies = [
  { src: 'https://svgl.app/library/astro_dark.svg', alt: 'Astro' },
  { src: 'https://svgl.app/library/react.svg', alt: 'React' },
  { src: 'https://svgl.app/library/supabase.svg', alt: 'Supabase' },
  { src: 'https://svgl.app/library/vitejs.svg', alt: 'Vite' },
  { src: 'https://svgl.app/library/mariadb.svg', alt: 'MariaDB' },
  { src: 'https://svgl.app/library/mongodb.svg', alt: 'MongoDB' },
  { src: 'https://svgl.app/library/postgresql.svg', alt: 'PostgreSQL' },
  { src: 'https://svgl.app/library/nextjs_icon_dark.svg', alt: 'Next.js' },
  { src: 'https://svgl.app/library/php_dark.svg', alt: 'PHP'},
  { src: 'https://svgl.app/library/bootstrap.svg', alt: 'Bootstrap'},
  { src: 'https://svgl.app/library/nodejs.svg', alt: 'Node.js'},
  { src: 'https://svgl.app/library/python.svg', alt: 'Python'},
  { src: 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/09/ELE013.jpg', alt: 'ESP32'},
  { src: 'https://mqtt.org/assets/downloads/mqtt-ver.png', alt: 'MQTT'},
  { src: 'https://svgl.app/library/threejs-dark.svg', alt: 'Three.js'},
  { src: 'https://svgl.app/library/blender.svg', alt: 'Blender'},
  { src: 'https://svgl.app/library/preact.svg', alt: 'Preact'},
  { src: 'https://svgl.app/library/openai_dark.svg', alt: 'OpenAI'},
  { src: '/technologies/mapbox.png', alt: 'Mapbox'},
  { src: 'https://svgl.app/library/linux.svg', alt: 'Linux'},
];