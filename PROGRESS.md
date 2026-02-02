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

### Day 07: Native Backend with Next.js
**What was completed:**
- Set up a backend using **Next.js App Router** (skipping Express).
- Created a Root API route (`/api`) and a Health Check route (`/api/health`).
- Integrated **Swagger** for automatic API documentation.
- Created an interactive API dashboard at `/api-docs`.

**Baby Step Explanation:**
- Instead of building a separate "server building," we built "vending machines" inside our website (Next.js Routes). Each route performs a specific task. We also added a "Map" (Swagger) so anyone can easily see and test what these vending machines do without looking at the complex code logic.
- **Tools:** Next.js Route Handlers, Swagger JSDoc, Swagger UI.
- **Result:** We now have a professional backend infrastructure that is documented and ready for blockchain data integration.

---

### Day 08: Database Schema & Relationships
**What was completed:**
- Designed Firestore schemas for `User`, `Post`, `Comment`, and `AnonSession`.
- Created a `models/` folder in the project to store TypeScript interfaces.
- Defined relationships (1-to-many) between Users, Posts, and Comments.
- Linked Blockchain data (TX Hash) to our database models.

**Baby Step Explanation:**
- Think of a "Database Schema" as a set of rules for how our information is organized. For example, a `Post` must know who wrote it (`authorId`). We created "Digital Blueprints" (Interfaces) so our code knows exactly what a User or a Post should look like. This keeps our app from getting confused.
- **Tools:** Firebase Firestore, TypeScript.
- **Result:** Our data structure is ready! We can now start saving users, their posts, and comments to the cloud securely.


<!-- erDiagram
    USER ||--o{ POST : "creates"
    USER ||--o{ COMMENT : "writes"
    POST ||--o{ COMMENT : "contains"
    ANONSESSION {
        string tempId
        timestamp expiresAt
    }
    USER {
        string uid PK
        string walletAddress
        string username
        timestamp createdAt
    }
    POST {
        string id PK
        string authorId FK
        string blockchainHash
        string content
    }
    COMMENT {
        string id PK
        string postId FK
        string authorId FK
        string content
    } -->
