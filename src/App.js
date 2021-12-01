import React from "react";
import Container from "./components/Container";
import user from "./components/SocialProfile/user.json";
import SocialProfile from "./components/SocialProfile";
import data from "./components/Statistics/data.json";
import Statistics from "./components/Statistics";
import friendData from "./components/FriendList/friends.json";
import FriendList from "./components/FriendList";
import transactionData from "./components/TransactionHistory/transactions.json";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <Container>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friendData} />
      <TransactionHistory items={transactionData} />
    </Container>
  );
}

export default App;
