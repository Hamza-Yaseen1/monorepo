// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Social {
    /* =======================
            STRUCTS
    ======================= */

    struct User {
        address userAddress;
        string username;
        bool isRegistered;
    }

    struct Post {
        uint256 id;
        address author;
        string content;
        bytes32 contentHash;
        uint256 timestamp;
    }

    /* =======================
            STATE
    ======================= */

    mapping(address => User) public users;
    mapping(uint256 => Post) public posts;

    uint256 public postCount;

    /* =======================
            EVENTS
    ======================= */

    event UserRegistered(address indexed user, string username);
    event PostCreated(
        uint256 indexed postId,
        address indexed author,
        bytes32 contentHash
    );

    /* =======================
            MODIFIERS
    ======================= */

    modifier onlyRegisteredUser() {
        require(users[msg.sender].isRegistered, "User not registered");
        _;
    }

    /* =======================
            FUNCTIONS
    ======================= */

    function registerUser(string memory _username) public {
        require(!users[msg.sender].isRegistered, "User already registered");

        users[msg.sender] = User({
            userAddress: msg.sender,
            username: _username,
            isRegistered: true
        });

        emit UserRegistered(msg.sender, _username);
    }

    function createPost(string memory _content)
        public
        onlyRegisteredUser
    {
        postCount++;

        bytes32 hash = keccak256(abi.encodePacked(_content));

        posts[postCount] = Post({
            id: postCount,
            author: msg.sender,
            content: _content,
            contentHash: hash,
            timestamp: block.timestamp
        });

        emit PostCreated(postCount, msg.sender, hash);
    }

    function verifyPostHash(uint256 _postId, string memory _content)
        public
        view
        returns (bool)
    {
        bytes32 hash = keccak256(abi.encodePacked(_content));
        return posts[_postId].contentHash == hash;
    }
}
