import React, { Component } from 'react';
import axios from 'axios';
import DefaultLayout from '../layouts/DefaultLayout';

class Title extends Component {
    constructor() {
        super();
        this.state = {
            body: ''
        };
    }

    componentDidMount(){
        let self = this; //Once inside the axios request, this will not be the same this.
        axios.get('http://91.107.217.207/jsonapi/node/page')
            .then(function (response){
                let bodys = response.data;
                self.setState({
                    body: bodys
                })
            })
            .catch(function(error){
                console.log(error);
            })
    }
    render (){
        return (
            <div>
                <DefaultLayout> {this.state.body} </DefaultLayout>
            </div>
        )
    }
}

export default Title;
