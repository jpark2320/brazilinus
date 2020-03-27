import { useRouter } from 'next/router';

import { Wrapper } from './styles';

const SubNavigation = () => {
  const router = useRouter();
  const _pathname = router.pathname.slice(1);
  const pathname = _pathname.charAt(0).toUpperCase() + _pathname.slice(1);
  return (
    <Wrapper>
      <ul>
        {pathname}
        <li>Apple</li>
        <li>Banana</li>
        <li>Carrots</li>
      </ul>
    </Wrapper>
  );
};

export default SubNavigation;
