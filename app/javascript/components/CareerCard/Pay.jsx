import React from 'react';

export class Pay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pay: this.props.pay
        }

        this.insertPay = this.insertPay.bind(this);
    }

    insertPay(pay) {
        switch(pay) {
            case "$1K - 30K":
                return <><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i></>;
            case "$31K - 60K":
                return <><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i></>;
            case "$61K - 90K":
                return <><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i></>;        
            case "$91K - 120K":
                return <><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay text-muted"></i><i className="bi bi-currency-dollar pay text-muted"></i></>;
            case "$121K - 200K":
                return <><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay text-muted"></i></>;         
            case "$200K+":
                return <><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i><i className="bi bi-currency-dollar pay"></i></>;         
        }
    }

    render() {       
        return (
            <>
                {this.insertPay(this.props.pay)}
            </>
        )
    }
}