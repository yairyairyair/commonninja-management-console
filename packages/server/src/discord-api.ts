import fetch from 'node-fetch'

const HEADERS = {
    'Content-Type': 'application/json'
}

const sendDiscordMessage = async (webhookToSendTo: string, message: string) => {
    const discordPayload = { content: message };

    const response = await fetch(`${webhookToSendTo}?wait=true`, {
        headers: HEADERS,
        method: 'POST',
        body: JSON.stringify(discordPayload)
    });

    if (!response.ok) {
        const responseText = await response.text();
        throw new Error(responseText);
    }
    const responseJson = await response.json();
    return responseJson;
}

export {
    sendDiscordMessage,
}
