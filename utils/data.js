const usernames = [
    "akshatha2022",
    "ajay2022",
    "aadhrith2022",
    "starwars1011",
    "jamesbond007"
];

const emails = [
    "akshathafakeemail@fake.com",
    "ajayfakeemail@fake.com",
    "aadhrithfakeemail@fake.com",
    "starwarsfake@fake.com",
    "jamesbond007fake@fake.com"
];

const thoughts = [
    "Hello, why is it so confusing",
    "What is happening",
    "Really",
    "Okay, let us see",
    "How it goes"
];

const reactions = [
"OMG",
"No way!",
"Oh nooooo",
"Thanks, it is working now",
"Welcome"
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () => {
    `${getRandomArrItem(usernames)}`;
};

const getRandomEmail = () => {
    `${getRandomArrItem(emails)}`;
};

const getRandomThoughts = () => {
    `${getRandomArrItem(thoughts)}`;
};

module.exports = { getRandomUsername, getRandomEmail, getRandomThoughts };
