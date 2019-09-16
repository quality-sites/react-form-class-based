import React from 'react';
import Container from './components/Container';
import Form from './components/Form';
import './App.scss';

export default class App extends React.Component {

    render () {
        return (
            <div>
                <h2 className="title">React Forms - Class Based</h2>
                <Container>
                    <Form />
                </Container>
            </div>
        );
    }
}