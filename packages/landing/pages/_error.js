import React from 'react';
import Head from 'next/head';
import ErrorSec from '../containers/Error';
import { ResetCSS } from 'common/src/assets/css/style';

class Error extends React.Component {
  static async getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <>
        <Head>
          <title>404: Not found</title>
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <div>
          {this.props.statusCode ? (
            `An error ${this.props.statusCode} occurred on server`
          ) : (
            <ErrorSec></ErrorSec>
          )}
        </div>
      </>
    );
  }
}

export default Error;
