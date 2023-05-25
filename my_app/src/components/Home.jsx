import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Home extends Component {

    state = {
        posts: [1, 2, 3, 4, 5]
    }

    componentDidMount() {
        console.log("COMPONENT DID MOUNT");
        axios.get("https://admin-staging.findwines.ge/api/companies").then((responce) => {
            this.setState({ posts: responce.data.data })
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        const posts = this.state.posts;

        console.log(posts);
        const allPosts = posts.map((post, idx) => {
            return (
                <div key={idx}>
                    <h1>{post.name}</h1>
                    <h4>{post.address}</h4>
                    <Link to='/new-post'>Write post</Link>
                    <hr />
                </div>
            )
        });

        return (
            <div>
                <div>
                    <Link to="/new-post">Add new</Link>
                </div>
                {allPosts}
            </div>
        )
    }
}
