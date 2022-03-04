import Home from '../page/home';

fixture `YouTube`
    .page `https://www.youtube.com/`;

test('YT-1', async t => {
    await t.maximizeWindow();
    console.log("Check YouTube Home elements");
    await Home.checkYouTubeHomeElements;
});

// test('YT-', async t => {
// });
