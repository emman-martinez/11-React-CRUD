import React, { Component } from 'react';
import Listado from './Listado';

class Posts extends Component {
    render() {
        return(
            <div className="col-12 col-md-8">
                <h2 className="text-center">Posts</h2>
                { /***** Componente: Listado.js  *****/ }
                <Listado
                            posts={this.props.posts}
                ></Listado>
            </div>
        )
    }
}

export default Posts;
