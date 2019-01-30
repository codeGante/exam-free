const articleReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ARTICLE':
            return state.concat([action.data]);
        case 'DELETE_ARTICLE':
            return state.filter((post)=>post.id !== action.id);
        case 'EDIT_ARTICLE':
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post);
        case 'UPDATE':
            return state.map((post)=>{
                if(post.id === action.id) {
                    return {
                        ...post,
                        title:action.data.newTitle,
                        message:action.data.newMessage,
                        editing: !post.editing
                    }
                } else return post;
            })
        default:
            return state;
    }
}
export default articleReducer;
