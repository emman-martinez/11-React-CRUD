import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';
import Imagen from './Imagen';

class Router extends Component {
    
    state = {
        posts: [],
    }

    // ***** Se ejecuta al cargarse la página
    componentDidMount() {
        this.obtenerPost();
    }

    obtenerPost = () => {
        console.log('¡Listo!');

        // ***** Consumo de API por medio de Axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // console.log(res.data);
                this.setState({
                    posts: res.data,
                })
            })
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <div className="container">
                        <div className="row justify-content-center">
                            { /***** Componente: Header.js  *****/ }
                            <Header></Header>
                            { /***** Componente: Navegacion.js  *****/ }
                            <Navegacion></Navegacion>
                            { /***** Componente: Switch (Cambiar entre las distintas páginas)  *****/ }
                            <Switch>
                                { /***** Componente: Route --> Componente Posts  *****/ }
                                <Route exact path="/" render={ () => {
                                    return(
                                        <Posts
                                                posts={this.state.posts}
                                        ></Posts>
                                    )
                                }}></Route>
                                { /***** Componente: Route --> Componente SinglePost  *****/ }
                                <Route exact path="/post/:postId" render={ (props) => {
                                    let idPost = props.location.pathname.replace('/post/', '');
                                    return(
                                        // console.log(props)
                                        // console.log(idPost)
                                        
                                        <SinglePost
                                                    
                                        ></SinglePost>
                                    )
                                }}></Route>
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
                { /***** Componente: Imagen.js  *****/ }
                <Imagen></Imagen>
            </div>   
        )
    }
}

export default Router;
