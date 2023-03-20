import renderer from 'react-test-renderer';
import Itunes from "./Itunes";

test('test if Itunes component renders?', () => {
  // tree variable for storing json dom tree representation
  const tree = renderer
  // creating componentw
      .create(<Itunes/>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});

