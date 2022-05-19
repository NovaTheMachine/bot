async function bot () { async function achat(){

  const fs = require('fs');
  const Web3 = require('web3');
  const web3 = new Web3('https://bsc-dataseed.binance.org/');
  const abi = JSON.parse(fs.readFileSync('abi.json'));  

  
  const myAccount = '0x6cbBf5889A4795667366c346eA0b7c0A2205Ae4C';
  const contractAdress = "0x10ED43C718714eb63d5aA57B78B54704E256024E"
  const privateKey = '';
  
  const addresses = {
    WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    router: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    recipient: '0xEC5ACE726593F061E665dA2b43EF92b3D5D1a39f'
  }
  
  
  const gasprice= await web3.eth.getGasPrice()
  const count = await web3.eth.getTransactionCount(myAccount)
  const token = new web3.eth.Contract(abi, contractAdress)
  
  
  //Our execution price will be a bit different, we need some flexbility

  
  const txObject = {
    from: myAccount,
    nonce: "0x" + count.toString(16),
    to: contractAdress,
    gas: 1500000,
    gasPrice: gasprice,
    value:"0x0",
    data:token.methods.swapExactTokensForTokens("35000000000000000000",
      "35000000000000000000",
      ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56","0x8460B5A15B41E3FCa7df1ed98a5017bbf518f3a9",],
      "0x6cbBf5889A4795667366c346eA0b7c0A2205Ae4C",
      Date.now() + 1000 * 60 * 10 //10 minutes
    ).encodeABI(),
    
  }
  
  
  web3.eth.accounts.signTransaction(txObject, privateKey, (err, res) => {
    if (err) {
      console.log('err',err)
    }
  
    const raw = res.rawTransaction;
  
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log("txHash:", txHash)
      }
    })
  })} 
  achat()

  async function vente(){
  
    const fs = require('fs');
    const Web3 = require('web3');
    const web3 = new Web3('https://bsc-dataseed.binance.org/');
    const abi = JSON.parse(fs.readFileSync('abi.json'));  
    const ethers = require('ethers');
    
    
    const myAccount = '0x6cbBf5889A4795667366c346eA0b7c0A2205Ae4C';
    const toAddress = '0x0ce28ef863D52121A874645E943E311F7BA8f95f';
    const contractAdress = "0x10ED43C718714eb63d5aA57B78B54704E256024E"
    const privateKey = '';
    
    const addresses = {
      WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
      router: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
      recipient: '0xEC5ACE726593F061E665dA2b43EF92b3D5D1a39f'
    }
    
    
    const gasprice= await web3.eth.getGasPrice()
    const count = await web3.eth.getTransactionCount(myAccount)
    const token = new web3.eth.Contract(abi, contractAdress)
    
    
    //Our execution price will be a bit different, we need some flexbility
    
    
    const txObject = {
      from: myAccount,
      nonce: "0x" + count.toString(16),
      to: contractAdress,
      gas: 150000,
      gasPrice: gasprice,
      data:token.methods.swapTokensForExactTokens("25000000000000000000",
      "25000000000000000000",
      ["0x8460B5A15B41E3FCa7df1ed98a5017bbf518f3a9","0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"],
      "0x6cbBf5889A4795667366c346eA0b7c0A2205Ae4C",
      Date.now() + 1000 * 60 * 10 //10 minutes
    ).encodeABI(),
      
    }
    
    
    web3.eth.accounts.signTransaction(txObject, privateKey, (err, res) => {
      if (err) {
        console.log('err',err)
      }
    
      const raw = res.rawTransaction;
    
      web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if (err) {
          console.log(err)
        }
        else {
          console.log("txHash:", txHash)
        }
      })
    })} 

  setTimeout(vente,7200000)
  
  }





setInterval(bot, 14400000); 

