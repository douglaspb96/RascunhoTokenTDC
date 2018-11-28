import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Button, Input } from 'semantic-ui-react';
import LoadingScreen from '../ComponentesGerais/LoadingScreen/LoadingScreen';

import ContratoToken from '../Contratos/TokenTDC';
import web3 from '../Web3';

export default class TransferirToken extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            chave: '',
            loadingForm: false,
            existsResult: '',
            result: '',
            chaveDoUsuarioRecebedor : '',
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

        this.setState({ loadingForm : true });
        /*
        ContratoToken.methods.transfer(this.state.chaveDoUsuarioRecebedor, this.state.inputQuantidade).send({ from : this.state.chave })
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

        return (
            <Row className="TransferirToken">
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
                            Transfira TDCs
                        </Row>
                        <Row>
                            <form onSubmit = {this.submit.bind(this)} >
                                <Row style={{ marginBottom: 10 }}>
                                    <Row style={{ fontWeight: 'bold', marginBottom: 10 }}>
                                        Pessoa
                                    </Row>
                                    <Row>
                                        <Input
                                            type="text"
                                            name = "chaveDoUsuarioRecebedor"
                                            onChange = { this.changeInput.bind(this) }
                                            placeholder="Chave do usuário a receber a quantia"
                                        />
                                    </Row>
                                </Row>
                                <Row style={{ marginBottom: 10 }}>
                                    <Row style={{ fontWeight: 'bold', marginBottom: 10 }}>
                                        Quantia
                                    </Row>
                                    <Row>
                                        <Input
                                            type="number"
                                            name = "inputQuantidade"
                                            onChange = { this.changeInput.bind(this) }
                                            placeholder="Digite a quantia de Token"
                                        />
                                    </Row>
                                </Row>
                                <Row style={{ marginBottom: 10 }}>
                                    <LoadingScreen
                                        loading={loadingForm}
                                        text={"Efetuando a transferência, por favor não feche o navegador e aguarde a execução"}
                                        existsResult={existsResult}
                                        result={result}
                                        success={"Transferência realizada com sucesso!"}
                                        error={"Erro ao transferir seus Tokens!"}
                                    />
                                </Row>
                                <Row>
                                    <Button primary>Transferir</Button>
                                </Row>
                            </form>
                        </Row>
                    </Row>
                }
            </Row>
        );
    }
}