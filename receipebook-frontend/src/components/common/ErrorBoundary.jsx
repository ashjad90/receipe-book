import React, { Component } from 'react';
import errorCss from '../../styles/pages/error.module.scss' 

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return ( <section className={errorCss.container}>
        <div className={errorCss.content}>
        <h1>Sorry! Error Occured</h1>
        <h1>Please report to Admin</h1>
        </div>
    
        <div className={errorCss.error404}></div>
      </section>);
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
