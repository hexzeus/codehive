// src/components/ErrorBoundary.js

import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: #e74c3c;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <ErrorWrapper>
                    <ErrorTitle>Oops! Something went wrong.</ErrorTitle>
                    <ErrorMessage>We're sorry, but an error occurred. Please try refreshing the page or contact support if the problem persists.</ErrorMessage>
                    {process.env.NODE_ENV === 'development' && (
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </details>
                    )}
                </ErrorWrapper>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;