import web3 from '../Web3.js';
import ABI from './ABITokenTDC.json';

export default new web3.eth.Contract(ABI, "0x488b40d514f2c1f831d8d470021e80f1c99c1747");