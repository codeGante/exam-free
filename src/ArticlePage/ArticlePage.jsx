import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class ArticlePage extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_ARTICLE', 
            data});
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (
            <div className="col-md-12 text-center">
                <h2>Create a new Article</h2>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input)=>this.getTitle = input} 
                        placeholder="Enter Article Title" /><br /><br />
                    <textarea required rows="5" cols="28" ref={(input)=>this.getMessage = input} 
                        placeholder="Enter the Article" /><br /><br />
                    <button>Create</button>
                </form>
                <Link to="/" className="btn btn-link">Cancel</Link>
                <Link to="/editArticle" className="btn btn-link">Edit</Link>
            </div>
        );
    }
}

const connectedArticlePage = connect()(ArticlePage);
export { connectedArticlePage as ArticlePage };
