function makeBankAccount() {
    // this one is private
    let balance = 0;

    // a "getter", made public via the returned object below
    function getBalance() {
        return balance;
    }

    // a "setter", made public via the returned object below
    function setBalance(amount) {
        // ... validate before updating the balance
        balance = amount;
    }

    return {
        // ...
        getBalance,
        setBalance
    };
}

const account = makeBankAccount();

//On a normalement pas accès a balance.
//Mais vu que getbalance() a accès à getbalance() et setbalance(). 
//Et que getbalance() et setbalance() accède a balance 
//alors on peut accéder a balance par le biais de ces fonctions.
//c'est ce qu'on appelle une closure
console.log(`Balance :`, account.getBalance())
account.setBalance(100);
console.log(`Balance :`, account.getBalance());

