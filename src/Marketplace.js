import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import './Marketplace.css';

function Marketplace({ selectedCategory, selectedItem }) {
    // const CONTRACT_ADDRESS = "0x2d4fb1969768a2268693336cbc6ad0c6c5992aa5"; // Contract address
    // const ABI = [
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "_name",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "_price",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "listItem",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "_id",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "purchaseItem",
    //         "outputs": [],
    //         "stateMutability": "payable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "_id",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "_to",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "transferItem",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "_owner",
    //                 "type": "address"
    //             }
    //         ],
    //         "name": "getItemsByOwner",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256[]",
    //                 "name": "",
    //                 "type": "uint256[]"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "itemCount",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "items",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "id",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "name",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "price",
    //                 "type": "uint256"
    //             },
    //             {
    //                 "internalType": "address payable",
    //                 "name": "seller",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "address",
    //                 "name": "owner",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "bool",
    //                 "name": "isSold",
    //                 "type": "bool"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "address",
    //                 "name": "",
    //                 "type": "address"
    //             },
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "ownedItems",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     }
    // ];
    const CONTRACT_ADDRESS = "0x10d5cbef6a221dc7d620120985eb42d34b0a9ef1"; // Contract address
    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_category",
                    "type": "string"
                }
            ],
            "name": "listItem",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "purchaseItem",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                }
            ],
            "name": "transferItem",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "getItemsByOwner",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "itemCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "items",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "category",
                    "type": "string"
                },
                {
                    "internalType": "address payable",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "isSold",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "ownedItems",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState("");
    const [items, setItems] = useState([]);
    const [ownedItems, setOwnedItems] = useState([]);

    // Initialize the application and load data
    useEffect(() => {
        const init = async () => {
            if (typeof window.ethereum !== "undefined") {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                setProvider(provider);

                // Listen for account changes in MetaMask
                window.ethereum.on("accountsChanged", async (accounts) => {
                    setAccount(accounts[0]);
                    const signer = provider.getSigner();
                    setSigner(signer);
                    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
                    setContract(contract);
                    loadItems(contract, accounts[0]);
                    loadOwnedItems(contract, accounts[0]);
                });

                const accounts = await provider.send("eth_requestAccounts", []);
                setAccount(accounts[0]);

                const signer = provider.getSigner();
                setSigner(signer);

                const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
                setContract(contract);

                loadItems(contract, accounts[0]);
                loadOwnedItems(contract, accounts[0]);
            }
        };
        init();
    }, []);

    const loadItems = async (contract, owner) => {
        const itemCount = await contract.itemCount();
        let items = [];
        for (let i = 1; i <= itemCount; i++) {
            const item = await contract.items(i);
            items.push(item);
        }
        setItems(items);
        loadOwnedItems(contract, owner);
    };

    const loadOwnedItems = async (contract, owner) => {
        const ownedItemIds = await contract.getItemsByOwner(owner);
        let ownedItems = [];
        for (let i = 0; i < ownedItemIds.length; i++) {
            const item = await contract.items(ownedItemIds[i]);
            ownedItems.push(item);
        }
        setOwnedItems(ownedItems);
    };

    const listItem = async (name, price, selectedItem) => {
        const tx = await contract.listItem(name, ethers.utils.parseEther(price),selectedItem);
        await tx.wait();
        loadItems(contract, account);
        // Clear the input fields after the function call
        document.getElementById("itemName").value = "";
        document.getElementById("itemPrice").value = "";
    };

    const purchaseItem = async (id, price) => {
        const tx = await contract.purchaseItem(id, { value: ethers.utils.parseEther(price) });
        await tx.wait();
        loadItems(contract, account);
        loadOwnedItems(contract, account);
    };

    const transferItem = async (id, toAddress) => {
        const tx = await contract.transferItem(id, toAddress);
        await tx.wait();
        loadItems(contract, account);
        loadOwnedItems(contract, account);
    };

    return (
        <div className="App">
            <div className="list-item">
                <input id="itemName" placeholder="Item Name" className="input-field" />
                <input id="itemPrice" placeholder="Item Price (in ETH)" className="input-field1" />
                <button className="button" onClick={() => { 
                    listItem(
                        document.getElementById("itemName").value,
                        document.getElementById("itemPrice").value,
                        selectedItem
                    );
                }}>
                    List Item
                </button>
            </div>

            <div className="items">
                <h2>Items for Sale</h2>
                {items.filter(item => !item.isSold).map((item) => (
                    <div key={item.id} className="item-card">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Price:</strong> {ethers.utils.formatEther(item.price)} ETH</p>
                        <p><strong>Owner:</strong> {item.owner}</p>
                        {item.owner.toLowerCase() !== account.toLowerCase() && (
                            <button
                                className="button"
                                onClick={() => purchaseItem(item.id, ethers.utils.formatEther(item.price))}
                            >
                                Purchase
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <div className="owned-items">
                <h2>Your Items</h2>
                {ownedItems.map((item) => (
                    <div key={item.id} className="item-card">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Price:</strong> {ethers.utils.formatEther(item.price)} ETH</p>
                        <p><strong>Owner:</strong> {item.owner}</p>
                        <input id={`transferAddress${item.id}`} placeholder="Transfer to Address" className="input-field" />
                        <button className="button" onClick={() => transferItem(item.id, document.getElementById(`transferAddress${item.id}`).value)}>
                            Transfer
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Marketplace;