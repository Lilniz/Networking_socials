const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // // Create empty array to hold the users
  const users = [];

  // // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {

  //   const fullName = getRandomName();
  //   const first = fullName.split(' ')[0];
  //   const last = fullName.split(' ')[1];

    // users.push({
    //   first,
    //   // last,
    //   // github,
    //   // assignments,
    // });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtName: 'UCLA',
    inPerson: false,
    users: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
