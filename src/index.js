const messages = [
    "Oscar",
    "Carolina",
    "Paulina",
    "Ana",
    "Nicolay",
    "Diego",
    "Pilar",
    "Laura"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() *
        messages.length)]
    console.log(message)
}

module.exports = { randomMsg }