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
            loadingForm: false,
            existsResult: '',
            result: '',
            inputQuantidade : '',
        }
    }

    componentWillMount() {
        this.loadInfo();
    }

    loadInfo = async () => {
        // CARREGA CARTEIRA DO USUÁRIO
        /*
        web3.eth.getCoinbase((e, account) => {
            if (account !== null) {
                this.setState({ chave: account });
            }
        });
        */


        this.setState({ loading: false });
    }

    submit = async(e) => {
        e.preventDefault();

        await this.setState({ loadingForm : true });
        /*
        ContratoToken.methods.buy(this.state.inputQuantidade).send({ from : this.state.chave })
        .then(
            (result) => {
                this.retornaResultadoOperacao(true, true);
            }
        )
        .catch(
            (error) => {
                this.retornaResultadoOperacao(false, false);
            }
        );
        */
    }

    changeInput = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    retornaResultadoOperacao(result, recarrega) {
        this.setState({ existsResult: true, result: result });

        setTimeout(() => {
            this.setState({ existsResult: false, result: '', loadingForm: false });
            if (recarrega) {
                window.location.reload();
            }
        }, 2500);
    }

    render() {
        var { loading, loadingForm, existsResult, result } = this.state;

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
                                    <Row style={{ marginBottom: 10 }}>
                                        <LoadingScreen
                                            loading={loadingForm}
                                            text={"Efetuando compra, por favor não feche o navegador e aguarde a execução"}
                                            existsResult={existsResult}
                                            result={result}
                                            success={"Compra efetuada com sucesso!"}
                                            error={"Erro ao comprar!"}
                                        />
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