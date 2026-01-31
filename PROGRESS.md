# 🚀 Every Day Blockchain Development Progress

A simplified summary of our journey building a decentralized social media app.

---

### Day 1: Monorepo Setup
**What was completed:**
- Built the project "skeleton" (Monorepo).
- Initialized Git to track our progress.
- Created folders for the website (`/client`), server (`/server`), and blockchain (`/contracts`).

**Baby Step Explanation:**
- Think of a "Monorepo" as a big box where we keep all parts of our app (website and blockchain) together so they are easy to find.
- **Tools:** Next.js (Website), Hardhat (Blockchain toolkit), Git (History tracker).
- **Result:** We have a working project structure and the website starts locally.

---

### Day 2: Environment & Database Configuration
**What was completed:**
- Set up "Secret Files" (`.env`) for configuration.
- Connected the app to **Firebase** for cloud storage.
- Verified that the website can "talk" to the database.

**Baby Step Explanation:**
- Every app needs a place to store data. We used Firebase because it's fast. We used `.env` files to keep our private keys hidden, like a password in a vault.
- **Tools:** Firebase, Environment Variables (`.env`).
- **Result:** The app can safely connect to a database to save user info.

---

### Day 3: Smart Contract Structure
**What was completed:**
- Created the file `Social.sol` (our blockchain code).
- Defined what a **User** and a **Post** look like using "Structs."
- Created the **Register** function.

**Baby Step Explanation:**
- A "Smart Contract" is like a digital contract that runs forever on the blockchain. We defined a "User" (address, name) and made a way for people to "Sign Up" so the blockchain remembers them.
- **Tools:** Solidity (Contract language), Hardhat.
- **Result:** The basic foundation for our decentralized social network is ready.

---

### Day 4: Smart Contract Functions
**What was completed:**
- Added the **Create Post** and **Verify Hash** functions.
- Added "Events" to the contract.
- Successfully ran the contract logic on a local blockchain.

**Baby Step Explanation:**
- We gave users the power to "Write" posts on the blockchain. We also added a special "Security Check" (Hash) to see if a post is authentic. "Events" are like notifications that tell our website, "Hey! Someone just posted!"
- **Tools:** Solidity, Keccak256 (Security Hashing).
- **Result:** The "Brain" of our app can now handle posts and verify data.

---

### Day 5: Contract Testing
**What was completed:**
- Wrote **12 unit tests** to check for bugs.
- Used "Chai" to double-check results (Expectations).
- Verified that all 12 tests passed perfectly.

**Baby Step Explanation:**
- Testing is like a final exam for our code. We wrote "tests" to pretend to be users and see if the code breaks. We checked things like: "Can a user post twice?" or "Does registration work?" All 12 tests passed with green checkmarks!
- **Tools:** Hardhat, Mocha/Chai (Testing tools).
- **Result:** Confirmed that our code is safe, secure, and bug-free!

---

### Day 6: Contract Deployment
**What was completed:**
- Deployed the `Social.sol` smart contract to **Sepolia Testnet**.
- Verified the contract on **Sepolia Etherscan**.
- Successfully generated matching bytecode and published contract code publicly.

**Baby Step Explanation:**
- Deployment means putting our smart contract on a real blockchain network where anyone can use it! We used Sepolia Testnet (a practice blockchain) because Mumbai Testnet was shut down in April 2024. We then "verified" the contract, which means anyone can see and trust our code on Etherscan (like GitHub for blockchain). We used MetaMask wallet to send the contract, got free test ETH from a faucet, and used Remix IDE to compile and deploy.
- **Tools:** Remix IDE, MetaMask, Sepolia Testnet, Etherscan, Sepolia Faucet.
- **Result:** Our Social Media contract is now LIVE and publicly verifiable!
- **Contract Address:** `0x4E71f3059c982AEe820aB116ABb2b5c66E332b7d`
- **Verified URL:** https://sepolia.etherscan.io/address/0x4E71f3059c982AEe820aB116ABb2b5c66E332b7d

---