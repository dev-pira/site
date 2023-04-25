import { NextApiRequest, NextApiResponse } from "next";
import Cors from 'cors'
import { Telegraf } from "telegraf";

const cors = Cors({methods:['POST']})
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_GROUP_CHAT_ID = process.env.TELEGRAM_GROUP_CHAT_ID
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID
const DISCORD_API_TOKEN = process.env.DISCORD_API_TOKEN


export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    await middleware(request, response, cors)

    // create notification message
    const message = 'Nova vaga de trabalho no site!'
    // send to whatsapp
    // send to telegram
    sendTelegram(message)
    // send to slack
    await sendSlack(message)
    // send to discord
    await sendDiscord(message)
    // Facebook, LinkedIn, Instagram

    response.status(202).json({})
}

function middleware(
    request: NextApiRequest, 
    response: NextApiResponse,
    fn: Function) {
        return new Promise((resolve, reject) => {
            fn(request, response, (result: any) => {
                if (result instanceof Error) return reject(result)
                return resolve(result)
            })
        })
    }

function sendTelegram(message: string) {
    const bot = new Telegraf(TELEGRAM_BOT_TOKEN!)
    bot.telegram.sendMessage(TELEGRAM_GROUP_CHAT_ID!, message)
    bot.launch()
}

async function sendSlack(message: string) {
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify({
        text: message
    })
    const response = await fetch(SLACK_WEBHOOK_URL!, {method: 'POST', headers, body})
    console.info(`Sent to Slack and received ${response.status}`)
}

async function sendDiscord(message: string) {
    const url = `https://discord.com/api/channels/${DISCORD_CHANNEL_ID}/messages`
    const headers = { 
        'Authorization': `Bot ${DISCORD_API_TOKEN}`,
        'Content-Type': 'application/json' 
    }
    const body = JSON.stringify({
        content: message
    })
    const response = await fetch(url, {method: 'POST', headers, body})
    console.info(`Sent to Discord and received ${response.status}`)
}
