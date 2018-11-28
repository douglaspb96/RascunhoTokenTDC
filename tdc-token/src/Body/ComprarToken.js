import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Button, Input } from 'semantic-ui-react';
import LoadingScreen from '../ComponentesGerais/LoadingScreen/LoadingScreen';

import ContratoToken from '../Contratos/TokenTDC';
import web3 from '../Web3';

export default class ComprarToken extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            chave: '',
            inputQuantidade : '',
        }
    }

    componentWillMount() {
        this.loadInfo();
    }

    loadInfo = async () => {
        // CARREGA CARTEIRA DO USUÁRIO
        await web3.eth.getCoinbase((e, account) => {
            if (account !== null) {
                this.setState({ chave: account });
            }
        });

        await this.setState({ loading: false });
    }

    submit = async(e) => {
        e.preventDefault();        
        ContratoToken.methods.buy(this.state.inputQuantidade).send({ from : this.state.chave });
    }

    changeInput = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    render() {
        var { loading } = this.state;

        //console.log(this.state);

        return (
            <Row className="ComprarToken">
                {
                    loading &&
                    <Row>
                        <LoadingScreen
                            loading={loading}
                            text="Carregando a página, por favor, aguarde!"
                        />
                    </Row>
                }
                {
                    !loading &&
                        <Row>
                            <Row className="header">
                                Compre TDCoin
                            </Row>
                            <Row>
                                <form onSubmit = { this.submit.bind(this) }>
                                    <Row style={{ marginBottom: 10 }}>
                                        <Row style={{ fontWeight: 'bold', marginBottom: 10 }}>
                                            Quantidade
                                        </Row>
                                        <Row>
                                            <Input
                                                type="number"
                                                name = "inputQuantidade"
                                                onChange = { this.changeInput.bind(this) }
                                                placeholder="Digite a quantidade de Token que gostaria de adquirir"
                                            />
                                        </Row>
                                    </Row>
                                    <Row>
                                        <Button primary>Adquirir</Button>
                                    </Row>
                                </form>
                            </Row>
                        </Row>
                }
            </Row>
        );
    }
}