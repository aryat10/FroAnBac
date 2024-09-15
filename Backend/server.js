import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready to serve');
});

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: '1',
            title: 'First Joke',
            content: 'Why don\'t scientists trust atoms? Because they make up everything!'
        },
        {
            id: '2',
            title: 'Second Joke',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
        },
        {
            id: '3',
            title: 'Third Joke',
            content: 'Why don\'t skeletons fight each other? They don\'t have the guts.'
        },
        {
            id: '4',
            title: 'Fourth Joke',
            content: 'What do you call fake spaghetti? An impasta!'
        },
        {
            id: '5',
            title: 'Fifth Joke',
            content: 'Why did the bicycle fall over? Because it was two-tired!'
        }
    ];
    res.json(jokes); // Use res.json for JSON respons
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
