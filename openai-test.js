const OpenAI = require("openai");
// const express = require('express');
// const app = express();
// const port = 3000;

const openai = new OpenAI();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// });


async function main() {
    const completion = await openai.chat.completions.create({
        messages: [
            {role: "system", content: "You are a helpful assistant with a southern accent"},
            {role: "user", content: "Hello, how are you today?"}
        ],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}

main();