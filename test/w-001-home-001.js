import Home from '../page/home';

fixture `YouTube`
    .page `https://www.youtube.com/`;

test('YT-1', async t => {
    await t.maximizeWindow();
    console.log("Check YouTube Home elements");
    await t.expect(Home.checkYouTubeHomeElements).ok();
});

// test('YT-', async t => {
// });
