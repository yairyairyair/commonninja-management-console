import * as React from 'react';
import { createElement } from 'react';
import { DashboardMenuItem, Menu, MenuItemLink, useResourceDefinitions, useSidebarState } from 'react-admin';
import DefaultIcon from '@mui/icons-material/ViewList';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const CustomMenu = (props) => {
    const resources = useResourceDefinitions()
    const [open] = useSidebarState();
    return (
        <Menu {...props}>
            <DashboardMenuItem />
            {Object.keys(resources).map(name => (
                <MenuItemLink
                    key={name}
                    to={`/${name}`}
                    primaryText={
                        (resources[name].options && resources[name].options.label) ||
                        name
                    }
                    leftIcon={
                        resources[name].icon ? createElement(resources[name].icon) : <DefaultIcon />
                    }
                    onClick={props.onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            {/* add your custom menus here */}
            <MenuItemLink
                to={'/categories'}
                primaryText={'Categories'}
                leftIcon={<CategoryIcon />}
                onClick={props.onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to={'/transactions'}
                primaryText={'Transactions'}
                leftIcon={<ReceiptLongIcon />}
                onClick={props.onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to={'/notifications'}
                primaryText={'Notifications'}
                leftIcon={<NotificationsIcon />}
                onClick={props.onMenuClick}
                sidebarIsOpen={open}
            />
        </Menu>
    );
};