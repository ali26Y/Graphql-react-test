import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Tabs from '../components/tabs';

const Faqs = () => {
    const renderFaqs = (
        <Query
            query={gql`
            {
                faqs {
                    title
                    body
                }
            }
            `}
        >
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return (
                    <div className="App-faqs">
                        <h1 className="main-heading">Faqs</h1>
                        <Tabs faqs={data.faqs} />
                    </div>
                )
            }}
        </Query>
    )
    return (
        <div className="App-faqs container">
            {renderFaqs}
        </div>
    )
};

export default Faqs