import { createContext, useContext } from 'react';
import IssueStore from './issue/issueStore';
const issueStore = new IssueStore();

export const store = {
  issueStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
