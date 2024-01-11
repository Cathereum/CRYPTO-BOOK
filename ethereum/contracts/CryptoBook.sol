// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


// создаем еще один контракт в помощь для независимого управления основным контрактом "Contact"

contract ContactFactory{

modifier isAlreadyHaveInfo(){
require(ownerToContact[msg.sender] == address(0), "You already added info!");
_;
}


   //через mapping указываем что мы хотим сделать главное(какую инфу сохранить?) нам нужно привязать адрес овнера кто деплоит данный контракт под названием "Contact"
   mapping(address=>address) public ownerToContact;
   //далее создаем функцию которая будет вызываться после деплоя (она как раз копирует функционал конструктора нашего первого контракта на который мы и делаем обертку)
   function createContact2(string memory _telegram, string memory _discord) public isAlreadyHaveInfo {
    //создаем новую переменную userContact c типом Contact которая наследуется через new Contact
    //в аргументы передаем то что и в конструкторе чтобы они корректно перезапиаалсиь
    Contact userContact = new Contact(msg.sender, _telegram, _discord);
    //а адресс "msg.sender" берем от текущего отправителя с помощью ранее созданного "ownerToContact"
    ownerToContact[msg.sender] = address(userContact);
   }
   //после этого конструктор основного контракта нужно дополнить еще одним входящим аргументом
   //адресом овнера кто создает этот контракт(**)

//==== Теперь если мы хотим еще сделать так чтобы если человек забыл указать discord то контракт всеравно задеплоился - нам нужно сделать похожую функцию но без обязательного аргумента дискорд, а в конструктор пердать пустую строку ""
function createContact1(string memory _telegram ) public isAlreadyHaveInfo {
    Contact userContact = new Contact(msg.sender, _telegram, "");
    ownerToContact[msg.sender] = address(userContact);
   }

}





//наш контракт что в нем будет какая информация
contract Contact{
    address public owner;
    string public  telegram;
    string public discord;
    string public description;

    // в конструкторе пишем что будет принимать наш контракт и в какой раздел записывать

    constructor(address _owner, string memory _telegram, string memory _discord){
        // в конструкторе пишем что он должен делать
        owner = _owner; //(**) заменили после добавления контракта "ContactFactory"
        telegram = _telegram;
        discord = _discord;

    }
    

    //(**) с помощью modifier чтобы не писать везде проверку на овнера делаем функцию помошник
    modifier onlyOwner(){
    require(owner == msg.sender, "You are not an owner!!!");
    _; // этот значек _; означает что после выполнения require продолжить блок кода где установлена была проверка
    }

    //далее создаем функции чтобы можно было данные менять после деплоя контракта

    function setTelegram( string memory _telegram) public {
        // с помощью require() указываем усовие при котором эта функция должна выполниться(*)
        require(owner == msg.sender, "You are not an owner!!!");
        telegram = _telegram;
    }

     function setDiscord( string memory _discord) public onlyOwner {
        discord = _discord;
    }

     function setDescription( string memory _description) public onlyOwner {
        description = _description;
    }
}