import React, { Component } from 'react';
import Post from './Post';

class Listado extends Component {

    mostrarPosts = () => {
        const posts = this.props.posts;
        if(posts.length === 0) return null;
        console.log(posts);

        return(
            <React.Fragment>
                {Object.keys(posts).map(post => (
                    // /***** Componente: Post.js  *****/ 
                    <Post
                            key={post}
                            info={this.props.posts[post]}
                    ></Post>
                ))}
            </React.Fragment>
        )
    }

    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Título</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mostrarPosts()}
                </tbody>
            </table>
        );
    }
}

export default Listado;