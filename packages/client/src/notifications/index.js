import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { Title } from 'react-admin';
import { DiscordIcon, TwitchIcon } from "../custom-icons";
import { addTokenQuery } from '../fetch';

const Notifications = () => {
    const [discordWebhookUrl, setDiscordWebhookUrl] = useState('');

    const onChangeDiscordWebhook = (event) => {
        const { value } = event.target;
        setDiscordWebhookUrl(value);
    }

    const saveWebhookURL = async () => {
        const response = await fetch(addTokenQuery('/register-webhook'), {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ webhook: discordWebhookUrl })
        });

        if (!response.ok) {
            const responseText = await response.text();
            throw new Error(responseText);
        }

        const responseJson = await response.json();
        return responseJson;
    };

    return (
        <Card>
            <Title title="Notifications" />
            <CardContent>
                <Typography variant="h4" component="div" className='text-center'>
                    Notifications
                </Typography>
                <div className="flex align-center gap-20 half-width">
                    <DiscordIcon />
                    <TextField label="Discord Webhook URL" fullWidth onChange={onChangeDiscordWebhook} value={discordWebhookUrl} />
                    <Button variant="contained" onClick={saveWebhookURL}>Save</Button>
                </div>
                <div className="flex align-center gap-20 half-width">
                    <TwitchIcon />
                    <TextField label="Premium Version Only" fullWidth disabled />
                    <Button variant="contained" disabled>Save</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export {
    Notifications
};
