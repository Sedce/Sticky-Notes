import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'react-uuid';

class StickyNotes extends Component {

    state = {
        items: [
            { id: uuid(), name: 'Jungkook' },
            { id: uuid(), name: 'Namjoon' },
            { id: uuid(), name: 'Seokjin' },
            { id: uuid(), name: 'Yoongi' },
        ]
    }

    render(){

        const { items } = this.state;
        return(
            <Container>
                <Button color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name}]
                        }));
                    }
                }}
                >Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="sticky-notes">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
export default StickyNotes;