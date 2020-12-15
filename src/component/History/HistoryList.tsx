import React from 'react';
import {Divider, List} from '@ui-kitten/components';
import HistoryItem from '@component/History/HistoryItem';
import {useUserState} from '@store/index';

interface HistoryListProps {
  headerComponent?: React.ReactElement;
}

export const HistoryList: React.FC<HistoryListProps> = ({headerComponent}) => {
  const {
    userInfo: {userHistory},
  } = useUserState();
  return (
    <List
      data={userHistory}
      style={{
        height: '100%',
        backgroundColor: '#fff',
      }}
      renderItem={(item) => <HistoryItem {...item} />}
      contentContainerStyle={{flexGrow: 1}}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={Divider}
      ListHeaderComponent={headerComponent}
    />
  );
};
