// add Comment component here
import React, { Component } from 'react';  //React has features, we want the component to inherit those features




export default class Comment extends Component {
    render(){
        return(
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}



