# -*- coding: utf-8 -*-
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer

bot = ChatBot(
    "Training Example",
    storage_adapter="chatterbot.storage.SQLStorageAdapter",
    logic_adapters=[
        "chatterbot.logic.BestMatch"
    ],
    input_adapter="chatterbot.input.TerminalAdapter",
    output_adapter="chatterbot.output.TerminalAdapter",
    database="../database.db"
    )
bot.set_trainer(ListTrainer)

bot.train([
    "Hi there",
    "Hello",
])

bot.train([
    "Greetings",
    "Hello",
])

bot.train([
    "I want Geico",
    "Nah dude, you want USAA",
])

bot.train([
    "I have problems",
    "No problem, we can help you with that. What are you having problems with?",
    "I'm having problems with my car and I don't know what to do.",
    "Have you looked at our Car Insurance policies yet?",
    "I current have Business Insurance",
    "Oh that's great! Have you looked at our car insurance?",
    "I don't want car insurance",
    "Okay, we'll remove that.",
    "I have car insurance",
    "Do you have a policy through USAA?",
    "I don't want USAA car insurance",
    "Booooo",
])

bot.train([
])




print("Type something to begin...")

# The following loop will execute each time the user enters input
while True:
    try:
        # We pass None to this method because the parameter
        # is not used by the TerminalAdapter
        bot_input = bot.get_response(None)

    # Press ctrl-c or ctrl-d on the keyboard to exit
    except (KeyboardInterrupt, EOFError, SystemExit):
        break