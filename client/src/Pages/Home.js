import React from 'react';

import DateTime from '../components/DateTime';
import Focus from '../components/Focus';
import SignOut from '../components/SignOut';
import Todos from '../components/Todo/Todos';
import Weather from '../components/Weather';
import WebLinks from '../components/WebLink/WebLinks';

import '../styles/Home.css';
import '../styles/HomeLayout.css';


// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default (props) => {
    //console.log('home props: ', props.account);
    const {account, onClickSignOut, setNeedsRefresh} = props;

    if (account !== null && account !== undefined) {
        return (
            <div className={'home-container-grid'}>
                <div className={'home-grid-top-left'}>
                    <div className={'home-flex-col-top'}>
                        <WebLinks {...props} setNeedsRefresh={setNeedsRefresh}/>
                    </div>
                </div>
                <div className={'home-grid-top-right'}>
                    <div className={'home-flex-col-top'}>
                        <Todos account={account} setNeedsRefresh={setNeedsRefresh}/>
                    </div>
                </div>
                <div className='home-grid-center'>
                    <div className={'home-flex-col-top home-flex-col-spread'}>
                        <h1>Make Your Day</h1>
                        <h2>Welcome, {props.account.firstName}</h2>
                        <h2>
                            <Focus account={props.account} setNeedsRefresh={setNeedsRefresh}/>
                        </h2>
                    </div>
                </div>
                <div className='home-grid-center-bottom'>
                    <div className={'home-flex-col-bottom'}>
                        <DateTime/>
                    </div>
                </div>
                <div className={'home-grid-bottom-left'}>
                    <div className={'home-flex-col-bottom'}>
                        <SignOut onClick={onClickSignOut}/>
                    </div>
                </div>
                <div className={'home-grid-bottom-right'}>
                    <div className={'home-flex-col-bottom'}>
                        <Weather/>
                    </div>
                </div>
            </div>
        );
    } else {
        <div>Loading...</div>;
    }
};
