import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Home = () => {
    const heroImage = (
        <Query
            query={gql`
            {
                homepage {
                    heading
                    subheading
                    heroImageUrl
                }
            }
            `}
        >
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return (
                    <div>
                        <div className="App-hero" />
                        <style type="text/css">
                            {`.App-hero { background-image: url(${data.homepage.heroImageUrl});}`}
                        </style>
                        <h1 className="main-heading">{data.homepage.heading}</h1>
                        <h4>{data.homepage.subheading}. <a href="/faqs">Learn more</a></h4>
                    </div>
                )
            }}
        </Query>
    )
    return (
        <div className="App-hero">
            {heroImage}
        </div>
    )
}

export default Home