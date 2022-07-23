import { Icon } from '@mui/material';

const DiscordIcon = (props) => {
    return (
        <Icon {...props}>
            <img src='/discord.svg' alt='discord' />
        </Icon>
    );
}

const TwitchIcon = (props) => {
    return (
        <Icon {...props}>
            <img src='/twitch.svg' alt='twitch' />
        </Icon>
    );
}

export {
    DiscordIcon,
    TwitchIcon,
}