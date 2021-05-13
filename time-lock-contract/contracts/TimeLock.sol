
pragma solidity 0.5.16 ;

contract TimeLock {
    IERC20 token;

    struct LockBoxStruct {
        address beneficiary;
        uint balance;
        uint releaseTime;
        string tokenType;//ether or some other erc20
    }

    LockBoxStruct[] public lockBoxStructs; // This could be a mapping by address, but these numbered lockBoxes support possibility of multiple tranches per address

    mapping(address => LockBoxStruct) etherDeposits;
    mapping(address => LockBoxStruct) nonEtherToken;//ERC20 but not ETH

    event LogLockBoxDeposit(address sender, uint amount, uint releaseTime,string  tokenType);   
    event LogLockBoxWithdrawal(address receiver, uint amount,string  tokenType);

    // constructor(address tokenContract) public {
    //     token = IERC20(tokenContract);
    // }

    function initializer(address tokenContract) public {
       token = IERC20(tokenContract);
    }

    function deposit(uint amount, uint releaseTime, string memory tokenType) public returns(bool success) {
        bool isSucess=false;
        require(token.transferFrom(msg.sender, address(this), amount));
        LockBoxStruct memory l;
        l.beneficiary = msg.sender;
        l.balance = amount;
        l.releaseTime = releaseTime;
        l.tokenType = tokenType;

        if(keccak256(abi.encodePacked(tokenType)) == keccak256(abi.encodePacked('ETH'))) {
              etherDeposits[msg.sender] = l;
              isSucess = true;
        } else {
              nonEtherToken[msg.sender] = l;
              isSucess = true;
        }

        emit LogLockBoxDeposit(msg.sender, amount, releaseTime, tokenType);
        return isSucess;
 
}

    function withdraw(string memory tokenType) public returns(bool success) {
        bool isSucess=false;
       if(keccak256(abi.encodePacked(tokenType)) == keccak256(abi.encodePacked('ETH'))) {
              LockBoxStruct storage l = etherDeposits[msg.sender];
            //   require(l.beneficiary == msg.sender);
               require(l.releaseTime <= now);
               uint amount = l.balance;
               l.balance = 0;
               emit LogLockBoxWithdrawal(msg.sender, amount, tokenType);
               require(token.transfer(msg.sender, amount));
               isSucess = true;
               //return true;
        } else {
              LockBoxStruct storage l = nonEtherToken[msg.sender];
               require(l.beneficiary == msg.sender);
               require(l.releaseTime <= now);
               uint amount = l.balance;
               l.balance = 0;
               emit LogLockBoxWithdrawal(msg.sender, amount, tokenType);
               isSucess = true;
               //return true;
        }

        return isSucess ;

        // LockBoxStruct storage l = lockBoxStructs[lockBoxNumber];
        // require(l.beneficiary == msg.sender);
        // require(l.releaseTime <= now);
        // uint amount = l.balance;
        // l.balance = 0;
        // emit LogLockBoxWithdrawal(msg.sender, amount, tokenType);
        // require(token.transfer(msg.sender, amount));
        // return true;
    }    

}


/**
 * @title ERC20 interface
 */
interface IERC20 {
  function totalSupply() external view returns (uint256);

  function balanceOf(address who) external view returns (uint256);

  function allowance(address owner, address spender)
    external view returns (uint256);

  function transfer(address to, uint256 value) external returns (bool);

  function approve(address spender, uint256 value)
    external returns (bool);

  function transferFrom(address from, address to, uint256 value)
    external returns (bool);

  event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
  );

  event Approval(
    address indexed owner,
    address indexed spender,
    uint256 value
  );
}