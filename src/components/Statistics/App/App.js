import user from 'components/user.json'
import { Profile } from 'components/Profile/Profile';
import { Statistics } from '../Statistics';
import { FriendList } from '../../FriendList/FriendList';
import { TransactionHistory } from '../../TransactionHistory/TransactionHistory';
import transactions from 'components/transactions.json';
import data from 'components/data.json';
import friends from 'components/friends.json';
import { AppContainer } from './App.styled';
export const App = () => {
  return (
    <AppContainer>
      <Profile 
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppContainer>
  );
};

 