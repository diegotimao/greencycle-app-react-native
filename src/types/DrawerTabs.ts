// navigationTypes.ts
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootDrawerParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  Details: undefined;
};

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
};