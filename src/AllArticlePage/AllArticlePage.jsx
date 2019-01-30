import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditComponent from '../_components/ArticleComponent/EditComponent';

class AllArticlePage extends Component {
    render() {
        return (
            <div className="col-md-12 text-center">
                <h2>All Articles</h2>
                {console.log(this.props.posts)}
                {this.props.posts && this.props.posts.map((post) => ( 
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllArticlePage);