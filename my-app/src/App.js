import { useState, useEffect } from "react";
import Web3 from "web3"; // Import the web3 library
import atm_abi from "./Assessment.json";
import "/workspace/SCM-Starter/my-solidity-project/my-app/src/App.css";

export default function HomePage() {
  const [web3, setWeb3] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState("Loading..."); 
  const [ownerAddress, setOwnerAddress] = useState("Loading..."); 
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [recipientAddress, setRecipientAddress] = useState("");

  const contractAddress = "0x994DfE707a8B89d4ca2aB4F01a518DE08F35EFAE";
  const atmABI = atm_abi.abi;

  const loadWeb3 = async () => {
    try {
      
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable(); 
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        getATMContract(web3);
      } else {
        console.error(
          "Web3 provider not found. Please install MetaMask or use a compatible browser."
        );
      }
    } catch (error) {
      console.error("Error connecting to Web3:", error);
    }
  };

  
  const getATMContract = (web3) => {
    const atmContract = new web3.eth.Contract(atmABI, contractAddress);
    setATM(atmContract);
  };

  
  const getBalance = async () => {
    if (atm && account) {
      const balance = await atm.methods.getBalance().call({ from: account });
      setBalance(web3.utils.fromWei(balance, "ether"));
    }
  };

  
  const getOwnerAddress = async () => {
    if (atm) {
      try {
        
        const ownerAddr = await atm.methods.getOwner().call();
        setOwnerAddress(ownerAddr);
      } catch (error) {
        console.error("Error fetching owner address:", error);
      }
    }
  };

  const handleDeposit = async () => {
    if (depositAmount > 0) {
      if (atm) {
        try {
         
          const depositAmountWei = web3.utils.toWei(depositAmount.toString(), "ether");

          
          const tx = await atm.methods.deposit(depositAmountWei).send({
            value: depositAmountWei,
            from: account,
          });

          await tx.wait();
          getBalance();
        } catch (error) {
          console.error("Error depositing to the contract:", error);
        }
      }
    } else {
      console.log("Please enter a valid deposit amount.");
    }
  };

  const withdraw = async () => {
    if (atm) {
      try {
        const withdrawAmountWei = web3.utils.toWei(withdrawAmount.toString(), "ether");
        await atm.methods.withdraw(withdrawAmountWei).send({ from: account });
        getBalance();
      } catch (error) {
        console.error("Error withdrawing from the contract:", error);
      }
    }
  };

  const transfer = async () => {
    if (atm) {
      try {
        const transferAmountWei = web3.utils.toWei(transferAmount.toString(), "ether");
        await atm.methods.transfer(recipientAddress, transferAmountWei).send({ from: account });
        getBalance();
      } catch (error) {
        console.error("Error transferring funds:", error);
      }
    }
  };

  useEffect(() => {
    loadWeb3();
  }, []); 

  useEffect(() => {
    if (atm && account) {
      getBalance();
      getOwnerAddress();
    }
  }, [atm, account]);

  return (
    <div>
      <main className="container">
        <header>
          <h1>Welcome to the Eth goerli ATM!</h1>
        </header>
        {web3 && account ? (
          <div>
            <p>Your Account: {account}</p>
            <p>Your Balance: {balance} ETH</p>
            <p>Owner Address: {ownerAddress}</p>
            <div>
             
              <div>
                <input
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  placeholder="Enter deposit amount"
                />
                <button onClick={handleDeposit}>Deposit</button>
              </div>

              
              <div>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
                <button onClick={withdraw}>Withdraw</button>
              </div>

              
              <div>
                <input
                  type="number"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                />
                <input
                  type="text"
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  placeholder="Recipient Address"
                />
                <button onClick={transfer}>Transfer</button>
              </div>
            </div>
          </div>
        ) : (
          <p>Please install Metamask in order to use this ATM.</p>
        )}
      </main>
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </div>
  );
}