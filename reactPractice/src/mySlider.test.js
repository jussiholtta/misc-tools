import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import $ from 'teaspoon';
import mySlider from './mySlider';

describe('MySlider', () => {

    it('returns a function', () => {
        const MySlider = mySlider(React);
        const actual = typeof mySlider;
        const expected = 'function';
        assert.equal(actual, expected, 'slider factory returns stateless component constructor');
        });

    it('renders a wrapper div with baseId', () => {
        const props = { baseId: 'test-baseId' };
        const MySlider = mySlider(React);
        const actual = $(<MySlider {...props} />)
        .render()
        .find('div[id=test-baseId]')
        .length;
        const expected = 1;
        assert.equal(actual, expected, 'rendered wrapper div with baseId prop');
        });

    });
