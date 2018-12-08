import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'

const ALL_ITEMS_QUERY = gql`
    query ALL_ITEMS_QUERY{
        items{
            id
            title
            description
            image
            largeImage
            price
        }
    }
`


class items extends Component {
    render() {
        return (
            <div>
                <Query query={ALL_ITEMS_QUERY}>
                    {({data,error,loading}) => {
                        if(loading) return <p>Components Loading..</p>
                        if(error) return <p>Error: {error.message}</p>
                        return <div>
                        {data.items.map(item => 
                            <div key={item.id} style={{width: '32%',float:'left'}}>
                                <h3>{item.title}</h3>
                                <h3>{item.price}</h3>
                                <img src={item.image} alt={item.title} style={{width: '180px'}}/>
                                <p>{item.description}</p>
                            </div>
                        )}</div>
                    }}
                </Query>
            </div>
        );
    }
}

export default items;