import { Selector } from 'testcafe';
import XPathSelector from '../page/xpath-selector';

const btnHome     = XPathSelector('//*[normalize-space()="Home"]');
const btnExplore  = XPathSelector('//*[normalize-space()="Explore"]');

fixture `Youtube`
    .page `https://www.youtube.com/`;

test('home-0001', async t => {
    await t
        .maximizeWindow()
        .expect(btnHome.visible).ok()
        .click(btnHome)
        .expect(btnExplore.visible).ok()
        .click(btnExplore);
});

// test('home0002', async t => {
// });
