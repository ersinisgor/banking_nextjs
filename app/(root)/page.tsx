import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Ersin",
    lastName: "Isgor",
    email: "ersinisgor@hotmail.com",
  };

  // Two dummy banks
  const dummyBanks: Bank[] = [
    {
      $id: "bank1",
      accountId: "account1",
      bankId: "bank1",
      accessToken: "dummyAccessToken1",
      fundingSourceUrl: "dummyFundingSourceUrl1",
      userId: "user1",
      sharableId: "share1",
    },
    {
      $id: "bank2",
      accountId: "account2",
      bankId: "bank2",
      accessToken: "dummyAccessToken2",
      fundingSourceUrl: "dummyFundingSourceUrl2",
      userId: "user2",
      sharableId: "share2",
    },
  ];

  const dummyAccounts: Account[] = [
    {
      id: "account1",
      availableBalance: 500,
      currentBalance: 1000,
      officialName: "Savings",
      mask: "1234",
      institutionId: "bank1",
      name: "My Savings Account",
      type: "savings",
      subtype: "standard",
      appwriteItemId: "item1",
      sharableId: "share1",
    },
    {
      id: "account2",
      availableBalance: 1500,
      currentBalance: 2500,
      officialName: "Checking",
      mask: "5678",
      institutionId: "bank2",
      name: "My Checking Account",
      type: "checking",
      subtype: "standard",
      appwriteItemId: "item2",
      sharableId: "share2",
    },
  ];

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default Home;
