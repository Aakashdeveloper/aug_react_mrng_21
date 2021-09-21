import React from 'react';
import Footer from '../component/Footer';
import {create} from 'react-test-renderer';

describe('SnapShot Testing' ,() => {
    test('testing Footer', () => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})