import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// const Home = () => (<Redirect to='/simple8/me' />);

const Me = (props) => (<div><h1>ME</h1><pre>{JSON.stringify(props, null, 2)}</pre></div>);
export default connect(state => (state), undefined)(Me);