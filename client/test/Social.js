const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Social Media Contract", function () {
    let Social, social, owner, addr1, addr2;

    // This runs before EVERY 'it' test block
    beforeEach(async function () {
        // 1. Get some fake accounts to test with
        [owner, addr1, addr2] = await ethers.getSigners();

        // 2. Load the contract and deploy it
        Social = await ethers.getContractFactory("Social");
        social = await Social.deploy();
    });

    describe("1. Deployment & Setup", function () {
        it("Should deploy and have a valid address", async function () {
            expect(await social.getAddress()).to.not.equal(0);
        });

        it("Should start with postCount at 0", async function () {
            expect(await social.postCount()).to.equal(0);
        });
    });

    describe("2. User Registration", function () {
        it("Should allow a user to register", async function () {
            await social.connect(addr1).registerUser("Alice");
            const user = await social.users(addr1.address);
            expect(user.username).to.equal("Alice");
            expect(user.isRegistered).to.be.true;
        });

        it("Should fail if a user tries to register twice", async function () {
            await social.connect(addr1).registerUser("Alice");
            // This should fail (revert)
            await expect(social.connect(addr1).registerUser("Alice2"))
                .to.be.revertedWith("User already registered");
        });

        it("Should emit UserRegistered event", async function () {
            await expect(social.connect(addr1).registerUser("Alice"))
                .to.emit(social, "UserRegistered")
                .withArgs(addr1.address, "Alice");
        });
    });

    describe("3. Creating Posts", function () {
        it("Should allow a registered user to create a post", async function () {
            await social.connect(addr1).registerUser("Alice");
            await social.connect(addr1).createPost("Hello World!");
            expect(await social.postCount()).to.equal(1);
        });

        it("Should fail if a non-registered user tries to post", async function () {
            await expect(social.connect(addr2).createPost("I'm not registered"))
                .to.be.revertedWith("User not registered");
        });

        it("Should store the correct post data (author and content)", async function () {
            await social.connect(addr1).registerUser("Alice");
            await social.connect(addr1).createPost("My first post");

            const post = await social.posts(1);
            expect(post.author).to.equal(addr1.address);
            expect(post.content).to.equal("My first post");
        });

        it("Should increment postCount for multiple posts", async function () {
            await social.connect(addr1).registerUser("Alice");
            await social.connect(addr1).createPost("Post 1");
            await social.connect(addr1).createPost("Post 2");
            expect(await social.postCount()).to.equal(2);
        });

        it("Should emit PostCreated event", async function () {
            await social.connect(addr1).registerUser("Alice");
            await expect(social.connect(addr1).createPost("New Event Post"))
                .to.emit(social, "PostCreated");
        });
    });

    describe("4. Hash Verification", function () {
        beforeEach(async function () {
            await social.connect(addr1).registerUser("Alice");
            await social.connect(addr1).createPost("Verified Content");
        });

        it("Should return true for correct content verification", async function () {
            const isValid = await social.verifyPostHash(1, "Verified Content");
            expect(isValid).to.be.true;
        });

        it("Should return false for incorrect content verification", async function () {
            const isValid = await social.verifyPostHash(1, "Wrong Content");
            expect(isValid).to.be.false;
        });
    });
});
