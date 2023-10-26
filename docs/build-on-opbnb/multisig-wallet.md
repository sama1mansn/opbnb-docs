---
title: BNB Chain Safe Multi-Sig Wallet Service
index: yes
---
# BNB Chain Safe Multi-Sig Wallet Service

BNB Chain deployed a multi-sig wallet service based on the Gnosis Safe protocol on both BSC and opBNB. It provides users with a secure and convenient way to manage their digital assets and transactions.

# What is a Multi-Sig Wallet?

A multi-sig wallet is a type of cryptocurrency wallet that requires multiple signatures to authorize transactions. This makes it much more secure than a traditional single-signature wallet, as it prevents any single individual from stealing or misappropriating funds.

# Why is the Gnosis Safe Protocol so Secure?

The Gnosis Safe protocol is one of the most secure multi-sig wallet protocols available. It has been extensively audited by leading security experts and has been used by some of the largest and most trusted projects in the cryptocurrency space.

## Benefits of the BNB Chain Multi-Sig Wallet Service

The BNB Chain multi-sig wallet service offers a number of benefits to users, including:

- Enhanced security: As mentioned above, multi-sig wallets are much more secure than traditional single-signature wallets. By requiring multiple signatures to authorize transactions, the BNB Chain multi-sig wallet service helps to protect users from theft and fraud.
- Convenience: The BNB Chain multi-sig wallet service is easy to use and convenient to access. It is available on both BSC and opBNB, and it can be used with a variety of popular wallets.

# How to Use the BNB Chain Multi-Sig Wallet Service

To use the BNB Chain multi-sig wallet service, users will first need to create a Safe. This can be done by visiting the following link:

[https://safe.bnbchain.org/new-safe/create](https://safe.bnbchain.org/new-safe/create?chain=bsc-testnet)


<img
  src={require('../../static/img/image-20231026191109280.png').default}
  style={{zoom:"48%"}}
/>

It is recommended to add at least 3 owners to a multi-sig wallet for several reasons:

- It prevents any one owner from having full control over the funds. If there are only 2 owners, and one is compromised, the other owner will have no choice but to approve transactions authorized by the compromised owner. This could lead to the theft of funds.
- It provides a safety net in case one owner is unavailable. If there are at least 3 owners, and one is unavailable, the other 2 owners can still authorize transactions. This is important for businesses and organizations that need to ensure that their funds are always accessible.
- It makes it more difficult for fraud to occur. If all owners are required to approve transactions, it is much more difficult for one owner to commit fraud without the knowledge or consent of the other owners.

Please note, set the threshold to ⅔ of your owners to guarantee your account`s security.

<img
  src={require('../../static/img/image-20231026191152370.png').default}
  style={{zoom:"48%"}}
/>

Click next to continue 

<img
  src={require('../../static/img/image-20231026191240085.png').default}
  style={{zoom:"48%"}}
/>

After the multi-sig wallet account is created, you can login with any one of the owner`s EOA wallet to make a new transaction. In this example, I am trying to send 0.01 BNB to another address. 

<img
  src={require('../../static/img/image-20231026191335962.png').default}
  style={{zoom:"48%"}}
/>

Click next to continue, and you will see the one owner has approved and confirmed the transaction, the transaction is waiting for the second owner to approve. 

<img
  src={require('../../static/img/image-20231026191423625.png').default}
  style={{zoom:"48%"}}
/>

When another owner login with his/her EOA wallet, he/she can approve the transaction in the transaction queue. 

Then if the number of approval has reached the threshold we set originally, the transaction can be executed.

<img
  src={require('../../static/img/image-20231026191537111.png').default}
  style={{zoom:"48%"}}
/>

You can view the transaction execution result.

<img
  src={require('../../static/img/image-20231026191625166.png').default}
  style={{zoom:"48%"}}
/>

# Conclusion

The BNB Chain multi-sig wallet service provides users with a secure and convenient way to manage their digital assets and transactions. We encourage all BNB Chain users to consider using the multi-sig wallet service to protect their funds and keep them safe.