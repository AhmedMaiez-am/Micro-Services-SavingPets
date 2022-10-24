import { Injectable, Inject } from '@angular/core';
import { WEB3 } from '../../core/web3';
import { Subject } from 'rxjs';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { provider } from 'web3-core';
import { paperSignAddress, paperSignAbi } from '../../../abis.js'
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  public accountsObservable = new Subject<string[]>();
  web3Modal;
  web3js: any;
  provider: provider | any;
  accounts: string[] | any;
  balance: string | any;
  contract: any;

  constructor(@Inject(WEB3) private web3: Web3) {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: '16e68b2896934870bb1f6c768bfba400', // required change this with your own infura id
          description: 'Scan the qr code and sign in',
          qrcodeModalOptions: {
            mobileLinks: [
              'rainbow',
              'metamask',
              'argent',
              'trust',
              'imtoken',
              'pillar',
            ],
          },
        },
      },
      injected: {
        display: {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
          name: 'metamask',
          description: 'Connect with the provider in your Browser',
        },
        package: null,
      },
    };

    this.web3Modal = new Web3Modal({
      network: 'ropsten', // optional change this with the net you want to use like rinkeby etc
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: 'rgb(39, 49, 56)',
        main: 'rgb(199, 199, 199)',
        secondary: 'rgb(136, 136, 136)',
        border: 'rgba(195, 195, 195, 0.14)',
        hover: 'rgb(16, 26, 32)',
      },
    });
  }

  async connectAccount() {
    await this.web3Modal.clearCachedProvider();
    this.provider = await this.web3Modal.connect(); // set provider
    if (this.provider) {
      this.web3js = new Web3(this.provider);
    } // create web3 instance
    this.changeNetwork();
    this.accounts = await this.web3js.eth.getAccounts();
    return this.accounts;
  }

  async accountInfo(account: any[]) {
    const initialvalue = await this.web3js.eth.getBalance(account);
    this.balance = this.web3js.utils.fromWei(initialvalue, 'ether');
    return this.balance;
  }

  async changeNetwork() {
    if (!this.web3) return;
    this.web3js.currentProvider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x3' }],
    });
  }

  async signPaper(documentHash: any, description: any) {
    if (!this.web3js) return;
    this.contract = new this.web3js.eth.Contract(
      paperSignAbi,
      paperSignAddress
    );
    const tx = await this.contract.methods
      .sign(documentHash, description)
      .send({ from: this.accounts[0] });
    return tx;
  }

  async getSignature(documentHash: any) {
    if (!this.web3js) return;
    this.contract = new this.web3js.eth.Contract(
      paperSignAbi,
      paperSignAddress
    );
    const signatureData = await this.contract.methods
      .getPaperSignature(documentHash)
      .call({ from: this.accounts[0] });
    return signatureData;
  }
}
