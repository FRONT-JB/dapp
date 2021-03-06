**Setup FLow**

```bash
mkdir contracts && cd contracks
```

```bash
yarn init -y
```

```bash
yarn add @openzeppelin/contracts
```

---

**`solidity 파일 생성`**

    기본적으로 sol 확장자의 첫번째 라인에는 라이센스를 명시한다.
    두번째로는 컴파일러 버전을 명시한다.

```js
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
```

**`Import @openzeppelin`**

```js
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
```

---

**`Mint Function`**

```js
contract MintGemToken is ERC721Enumerable {
    // constructor : 스마트 컨트랙트가 배포될 때 최초에 실행할 함수
    //               name -> NFT 프로젝트 이름, symbol -> 명칭
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function mintGemToken() public {
        // 새로 생성하는 NFT ID
        uint tokenId = totalSupply() + 1;
        _mint(msg.sender, tokenId);
    }
}
```

---

**`OpenSea Testnet`**

<p align="center">
<img width="948" alt="스크린샷 2022-05-25 오후 11 21 42" src="https://user-images.githubusercontent.com/85790271/170285331-3961c433-fb96-4ee9-9f68-522ae2853c4c.png">
</p>

---

**`Ownable`**

_Ownable을 주입하면 해당 프로젝트를 커스텀 할 수 있다._

<p align="center">
<img width="1030" alt="스크린샷 2022-05-25 오후 11 32 05" src="https://user-images.githubusercontent.com/85790271/170288624-a2ef0ed8-b029-4b85-b426-640f09b681c7.png">
<img width="673" alt="스크린샷 2022-05-25 오후 11 34 27" src="https://user-images.githubusercontent.com/85790271/170288702-dfecfbf3-4c55-40b8-882f-6ca192d30463.png">
</p>

---

**`Sell`**
<p align="center">
<img width="726" alt="스크린샷 2022-05-25 오후 11 35 44" src="https://user-images.githubusercontent.com/85790271/170288845-a51ef44d-4a15-41cc-82ab-2041e378b266.png">
</p>

