import user from '../../data/user.json';
import transactions from '../../data/transactions.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { AppContainer } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme';
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </AppContainer>
    </ThemeProvider>
  );
};
