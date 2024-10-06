import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { mainStore } from '../stores';

type MainProvidersProps = {
  children: ReactNode
}
export const MainProviders: FC<MainProvidersProps> = ({ children }) => {
  return (
    <Provider store={mainStore}>
      {children}
    </Provider>
  )
}
