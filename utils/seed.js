const connection = require('../server');
const { User, Thought } = require('../models');

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected");
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];

    users.push(
    {
        username: "akshatha2022",
        email: "akshathafakeemail@fake.com",
    },
    {
        username: "ajay2022",
        email: "ajayfakeemail@fake.com",
    },
    {
        username: "aadhrith2022",
        email: "aadhrithfakeemail@fake.com",
    },
    {
        username: "starwars1011",
        email: "starwarsfake@fake.com",
    },
    {
        username: "jamesbond007",
        email: "jamesbond007fake@fake.com",
    },
  
);

    await User.collection.insertMany(users);

    console.table(users);
    console.info("Seeding complete");
    process.exit(0);
});