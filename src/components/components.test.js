import React from 'react';
import Footer from './footer';
import Header from './header';
import Tabs from './tabs';
import Renderer from 'react-test-renderer';

const mocks = [
  {
    'title': 'How long can I expect to get my claims resolved?',
    'body': 'A typical claim depends on the nature and time.'
  },
  {
    'title': 'Why is my points not updating?',
    'body': '<p>This because you have money owing or your account is suspended.</p>'
  }
]

describe('Components should match snapshots', () => {
  it('Header matches snapshot', () => {
    const header = Renderer
      .create(<Header />)
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  it('footer matches snapshot', () => {
    const footer = Renderer
      .create(<Footer />)
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
});

describe('Tabs should match mock', () => {
  it('should render mock payload', () => {
    const renderTabs = Renderer
      .create(<Tabs faqs={mocks} />)
      .toJSON();
    expect(renderTabs).toMatchSnapshot();
  })
})

