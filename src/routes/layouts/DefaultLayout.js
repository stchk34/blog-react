import React from 'react';
// SiteWide
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

class DefaultLayout extends React.Component {
    render() {
        let container = this.props.container;
        if(container) {
            container='container'
        }
        else {
            container=''
        }
        return (
            <div>
                <div className={"main-content " + container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default DefaultLayout;