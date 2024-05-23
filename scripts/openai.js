const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: 'sk-proj-KeJzK1zZqvi26HDQrP2aT3BlbkFJ1idLhgiIk7DjqvYJDZ6q'
})

const image_generate = async () => {
    const response = await openai.images.generate({
        model: "dall-e-3",
        n: 1,
        prompt: "Planet of the apes famous pics",
        size: "1024x1024"
    })

    console.log("Generated image url: ", response);
}

image_generate();