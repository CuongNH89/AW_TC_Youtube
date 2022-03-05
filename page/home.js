import { Selector, t } from 'testcafe';

class Home {
    // Elements in YouTube Home
    constructor () {
        // Top container
        this.icnGuideIcon   = Selector('#guide-icon');
        this.icnLogoIcon    = Selector('#logo-icon');
        this.tbxSearch      = Selector('#search[placeholder="Search"]');
        this.icnSearchIcon  = Selector('#search-icon-legacy');
        this.btnVoiceSearch = Selector('#voice-search-button');
        this.btnYouTubeApps = Selector('#button[aria-label="YouTube apps"]');
        this.btnSettings    = Selector('#button[aria-label="Settings"]');
        this.btnSignIn      = Selector('#button[aria-label="Sign in"]');

        // Left navigation

    }

    // Actions in YouTube Home

    async checkYouTubeHomeElements () {
        await t
            .expect(icnGuideIcon.visible).eql(true)
            .expect(icnLogoIcon.visible).eql(true)
            .expect(tbxSearch.visible).eql(true)
            .expect(tbxSearch.innerText).eql('aldkflaksdjlk#$$$$$')
            .expect(icnSearchIcon.visible).eql(true)
            .expect(btnVoiceSearch.visible).eql(true)
            .expect(btnYouTubeApps.visible).eql(true)
            .expect(btnSettings.visible).eql(true)
            .expect(btnSignIn.visible).eql(true);
    }
}

export default new Home();