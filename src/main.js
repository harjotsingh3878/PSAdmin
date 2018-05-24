
import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/homePage';
import About from './components/about/aboutPage';
import Header from './components/common/header';

class App extends React.Component {
    render() {
        var Child;
        switch(this.props.route) {
        case 'about': Child = About; break;
        default: Child = Home; 
        }

        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
}

function render () {
    var route = window.location.hash.substr(1);
    ReactDom.render( <App route={route}/>, document.getElementById('app'));
}

window.addEventListener("hashchange", render);
render();
