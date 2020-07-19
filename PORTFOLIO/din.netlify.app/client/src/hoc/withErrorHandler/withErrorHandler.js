import React, { Component } from "react";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../Auxilary/Auxilary";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };
        constructor() {
            super();
            this.reqInterceptor = axios.interceptors.request.use(
                request => {
                    return request;
                },
                error => {
                    this.setState({ error: `${error}` });
                    return Promise.reject(error);
                }
            );

            this.resInterceptor = axios.interceptors.response.use(
                res => {
                    return res;
                },
                error => {
                    this.setState({ error: `${error}` });
                    return Promise.reject(error);
                }
            );
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        popModal={this.errorConfirmedHandler}
                    >
                        {this.state.error}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHandler;
