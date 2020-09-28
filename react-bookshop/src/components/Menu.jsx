import React from 'react';
import { Menu, Popup, List, Button, Image, Icon } from 'semantic-ui-react';

const CartComponent = ({ title, id, image, removeFromCart, addedCount,rating }) => (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>

            <List.Content floated='right'>
                <Button onClick={removeFromCart.bind(this, id)} color="red">Remove</Button>
            </List.Content>
        </List.Item>
    </List>
)

const MenuComponent = ({ totalPrice, count, items }) => {
    return (
        <Menu>
            <Menu.Item name='browse'>BookShop</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item name='signup'>Total <b>&nbsp; {totalPrice} &nbsp; </b> <Icon name="euro" size="small" />  </Menu.Item>
                <Popup
                    trigger={
                        <Menu.Item name='help'> Cart (<b> {count}</b>) </Menu.Item>
                    }
                    content={items.map(book => <CartComponent {...book} />)}
                    on="click"
                    hideOnScroll
                />
            </Menu.Menu>
        </Menu>
    )
}

export default MenuComponent;