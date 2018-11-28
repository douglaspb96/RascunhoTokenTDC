import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Image } from 'semantic-ui-react';
import imageUser from '../images/user.png';
import ContratoToken from '../Contratos/TokenTDC';
import web3 from '../Web3';
import LoadingScreen from '../ComponentesGerais/LoadingScreen/LoadingScreen';

export default class DadosUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            chave: '',
            saldo: 0,
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

    render() {
        var { loading, chave, saldo } = this.state;

        return (
            <Row className="DadosUsuario">
                {
                    loading &&
                    <Row>
                        <LoadingScreen 
                            loading = {loading}
                            text = "Carregando a página, por favor, aguarde!"
                        />
                    </Row>
                }
                {
                    !loading &&
                    <Row>
                        <div className="header">
                            <Image src={imageUser} size='tiny' verticalAlign='middle' />
                        </div>
                        <div className="DivDados">
                            <Row style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{ chave !== '' ? chave : "Usuário não encontrado"}</Row>
                            <Row style={{ fontSize: 18, color: '#999' }}>Saldo : {saldo} TDC</Row>
                        </div>
                    </Row>
                }
                
            </Row>
        );
    }
}