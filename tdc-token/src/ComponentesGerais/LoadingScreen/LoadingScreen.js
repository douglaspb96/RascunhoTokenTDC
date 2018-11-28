import React, { Component } from 'react';
import Loader from './loader.gif';
export default class LoadingScreen extends Component {
    validateValue(value) {
        return value !== undefined && value !== "" && value !== null;
    }
    render() {
        var { children, loading, bgColor, textColor, text, existsResult, result, success, error } = this.props;
        existsResult = existsResult === true;
        result = result === true;
        success = this.validateValue(success) ? success : "Success!";
        error = this.validateValue(error) ? error : "Error!";
        loading = loading === true;
        textColor = this.validateValue(textColor) ? textColor : "#000";
        bgColor = this.validateValue(bgColor) ? bgColor : "#fff";
        return (
            <div className="row">
                {
                    loading
                        ? (
                            <div className="row" style={{ width: '100%', display : 'block', textAlign : 'center', padding : '50px 0', backgroundColor: bgColor }}>
                                {
                                    existsResult
                                    ? (
                                        result
                                        ? (
                                            <span style={{color : "green", fontSize : '18px'}}>
                                                {success}
                                            </span>
                                        ) : (
                                            <span style={{color : "red", fontSize : '18px'}}>
                                                {error}
                                            </span>
                                        )
                                    ) : (
                                        <span style={{color : textColor, fontSize : '18px'}}>
                                            {text}
                                            <img alt="" src={Loader} style={{ height : 50, marginTop : '-10px' }} />
                                        </span>
                                    )
                                }
                                
                            </div>
                        ) : (
                            <div>{ children }</div>
                        )

                }
            </div>
        );
    }
}