import React from 'react';
import ArticleList from '../ArticleList';

// import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };

  it('renders conrrectly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    console.log(wrapper.getElement());

    // expect(tree.children.length).toBe(2);
    // expect(tree).toMatchSnapshot();
  });
});
