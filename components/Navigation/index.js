import Link from 'next/link';
import Layout from '../Layout';
import TextInput from '../TextInput';

import { Navigation, Logo, Search, Menus } from './styles';

export default () => (
  <Layout>
    <Navigation>
      <Logo>
        <Link href='/'>
          <a>
            <span>BrazilInUS</span>
          </a>
        </Link>
      </Logo>
      <Search>
        <TextInput placeholder='Search for...' />
      </Search>
      <Menus>
        <Link href='/forum'>
          <a>Forum</a>
        </Link>
        <Link href='/rent'>
          <a>Rent</a>
        </Link>
        <Link href='/trade'>
          <a>Trade</a>
        </Link>
        <Link href='/jobs'>
          <a>Jobs</a>
        </Link>
      </Menus>
    </Navigation>
  </Layout>
);
