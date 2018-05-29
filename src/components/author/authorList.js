"use strict";

import React from 'react';

export default class AuthorList extends React.Component {
    render() {
        var createAuthorRow = function(author) {
            return  (
                <tr key={author.id}>
                    <td><a href={"authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        }
        return(
            <div>
                <table className="table">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}