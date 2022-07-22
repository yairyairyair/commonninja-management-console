import { Layout } from 'react-admin';
import { CustomAppBar } from './CustomAppBar';
import { CustomMenu } from './CustomMenu';

export const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} menu={CustomMenu} />;