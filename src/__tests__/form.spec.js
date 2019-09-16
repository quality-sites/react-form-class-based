import React from 'react';
import { mount } from 'enzyme';
import Form from '../components/Form';
import enzymeConfig from '../../enzymeConfig';

describe('<Form>', function() {

    it('Should capture name correctly onChange', function(){
        const component = mount(<Form />);
        const input = component.find('input').at(0);
        input.instance().value = 'John Peters';
        input.simulate('change');
        expect(component.state().name).toEqual('John Peters');
    });

    it('Should capture email correctly onChange and change the props accordingly', function(){
        const component = mount(<Form />);
        const input = component.find('input').at(1);        
        input.instance().value = 'mail@hotmail.com';
        input.simulate('change');
        expect(component.find('input').at(1).props().value).toEqual('mail@hotmail.com');
    });

    it('Should capture email correctly onChange and change the state accordingly', function(){
        const component = mount(<Form />);
        const input = component.find('input').at(1);        
        input.instance().value = 'mail@hotmail.com';
        input.simulate('change');
        expect(component.state().email).toEqual('mail@hotmail.com');
    });

    it('Should capture subject correctly onChange', function(){
        const component = mount(<Form />);
        const input = component.find('input').at(2);
        input.instance().value = 'test subject';
        input.simulate('change');
        expect(component.state().subject).toEqual('test subject');
    });

    it('Should capture message correctly onChange', function(){
        const component = mount(<Form />);
        const input = component.find('input').at(3);
        input.instance().value = 'test message';
        input.simulate('change');
        expect(component.state().message).toEqual('test message');
    });

    it('Should call alert() when submit button is clicked', function(){
        const state = {
            name:'John Peters', 
            email:'john@world.com',
            subject:'test subject',
            message:'test message'
        };
        const expectedArg = "Name: John Peters, Email: john@world.com, Subject: test subject, Message: test message";
        const component = mount(<Form />);
        window.alert = jest.fn();
        component.setState(state)
        component.find('form').simulate('submit')
        expect(window.alert).toHaveBeenCalledWith(expectedArg);
    });
});
