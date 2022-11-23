import React from "react";
import { Menu, Container } from 'semantic-ui-react';

export default function Navbar() {
    return (
        <Menu inverted>
            <Menu.Item name="star wars API"></Menu.Item>
            <Menu.Item name="people"></Menu.Item>
            <Menu.Item name="planets"></Menu.Item>
        </Menu>
    )
}