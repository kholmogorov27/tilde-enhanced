const CUSTOM_CONFIG = {
    /**
     * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
     * Icons must be added to "icons" folder and their values/names must be updated.
     * If none of the specified keys are matched, the '*' key is used.
     * Commands without a category don't show up in the help menu.
     * Update line 11 and 13 if you prefer using Google.
     */
    commands: [
      {
        name: 'Google',
        key: '*',
        url: 'https://google.com/',
        search: '/search?q={}',
      },
      {
        category: 'General',
        name: 'YouTube',
        key: 'y',
        button: 'y',
        url: 'https://youtube.com',
        search: '/results?search_query={}',
        color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
        icon: 'youtube',
        quickLaunch: false,
      },
      {
        category: 'General',
        name: 'Reddit',
        key: 'r',
        button: 'r',
        url: 'https://reddit.com',
        search: '/search?q={}',
        pathPath: '/r/{}',
        color: 'linear-gradient(135deg, #FF8456, #FF4500)',
        icon: 'reddit',
        quickLaunch: false,
      },
      {
        category: 'General',
        name: 'Translate',
        key: 't',
        button: 't',
        url: 'https://translate.google.com/',
        search: '/#view=home&op=translate&sl=auto&tl=ru&text={}',
        color: '#1a73e8',
        icon: 'translate',
        quickLaunch: false,
      },
      {
        category: 'General',
        name: 'VK',
        key: 'v',
        button: 'v',
        icon: 'vk',
        url: 'https://vk.com/im',
        color: 'linear-gradient(135deg, #1a73e8, #2787F5)',
      },
      {
        category: 'General',
        name: 'GitHub',
        key: 'g',
        button: 'g',
        url: 'https://github.com',
        search: '/search?q={}',
        color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
        icon: 'github',
        quickLaunch: true,
      },
      {
        name: 'DuckDuckGo',
        key: 'd',
        url: 'https://duckduckgo.com/',
        color: 'linear-gradient(135deg, #dd5145, #dd5145)',
        search: '/?q={}',
      },
      {
        name: 'Mail',
        key: 'm',
        url: 'https://gmail.com',
        search: '/#search/text={}',
        color: 'linear-gradient(135deg, #dd5145, #dd5145)',
        icon: 'mail',
        quickLaunch: true,
      },
      {
        name: 'Drive',
        key: 'dr',
        url: 'https://drive.google.com',
        search: '/drive/search?q={}',
        color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
        icon: 'drive',
        quickLaunch: false,
      },
      {
        category: 'General',
        name: 'Telegram',
        key: 'tg',
        button: 'm',
        url: 'https://web.telegram.org',
        color: '#5682a3',
        icon: 'telegram',
        quickLaunch: false,
      },
      {
        category: 'General',
        name: 'WhatsApp',
        key: 'w',
        button: 'w',
        url: 'https://web.whatsapp.com',
        color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
        icon: 'whatsapp',
        quickLaunch: false,
      },
      {
        name: 'Discord',
        key: 'dc',
        url: 'https://discord.com/app',
        color: '#7289da',
        icon: 'discord',
        quickLaunch: false,
      },
      {
        name: 'StackOverflow',
        key: 'st',
        url: 'https://stackoverflow.com',
        search: '/search?q={}',
        color: 'linear-gradient(135deg, #53341C, #F48024)',
        icon: 'stackoverflow',
        quickLaunch: true,
      },
      {
        category: 'Programming',
        name: 'HackerNews',
        key: 'h',
        url: 'https://news.ycombinator.com/',
        search: '/search?stories[query]={}',
        color: 'linear-gradient(135deg, #FF6600, #DC5901)',
        icon: 'hackernews',
        quickLaunch: true,
      },
      {
        name: 'MDN',
        key: 'md',
        url: 'https://developer.mozilla.org/en-US',
        search: '/search?q={}',
        color: '#212121',
        icon: 'mdn',
        quickLaunch: false,
      },
      {
        name: 'DevDocs',
        key: 'dd',
        url: 'https://devdocs.io',
        color: 'linear-gradient(135deg, #33373A, #484949)',
        icon: 'devdocs',
        quickLaunch: false,
      },
      {
        name: 'Netflix',
        key: 'n',
        url: 'https://www.netflix.com',
        color: 'linear-gradient(135deg, #E50914, #CB020C)',
        icon: 'netflix',
        quickLaunch: false,
      },
      {
        name: 'Spotify',
        key: 's',
        url: 'https://open.spotify.com/',
        search: '/search/{}',
        color: '#1dd35e',
        icon: 'spotify',
        quickLaunch: false,
      },
      {
        name: 'Twitch',
        key: 'ti',
        url: 'https://www.twitch.tv',
        search: '/directory/game/{}',
        color: 'linear-gradient(135deg, #6441a5, #4b367c)',
        icon: 'twitch',
        quickLaunch: false,
      },
      {
        name: 'Twitter',
        key: 'tt',
        url: 'https://www.twitter.com',
        search: '/search?q={}&src=typed_query',
        color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
        icon: 'twitter',
        quickLaunch: true,
      },
      {
        name: 'Instagram',
        key: 'i',
        url: 'https://www.instagram.com',
        color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
        icon: 'instagram',
        quickLaunch: true,
      },
      {
        name: 'LinkedIn',
        key: 'l',
        url: 'https://linkedin.com',
        search: '/search/results/all/?keywords={}',
        color: 'linear-gradient(135deg, #006CA4, #0077B5)',
        icon: 'linkedin',
        quickLaunch: true,
      },
      {
        name: 'Notion',
        key: 'ns',
        url: 'https://www.notion.so',
        color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
        icon: 'notion',
        quickLaunch: true,
      },
    ],
  
    /**
     * Get suggestions as you type.
     */
    suggestions: true,
    suggestionsLimit: 10,
  
    /**
     * The order and limit for each suggestion influencer. An "influencer" is
     * just a suggestion source. The following influencers are available:
     *
     * - "Commands" suggestions come from CONFIG.commands
     * - "Default" suggestions come from CONFIG.defaultSuggestions
     * - "DuckDuckGo" suggestions come from the duck duck go search api
     * - "Google" suggestions come from the google search api
     * - "History" suggestions come from your previously entered queries
     */
    influencers: [{
        name: 'Commands',
        limit: 2
      },
      {
        name: 'Default',
        limit: 4
      },
      {
        name: 'History',
        limit: 1
      },
      {
        name: 'Google',
        limit: 6
      },
    ],
  
    /**
     * Default search suggestions for the specified queries.
     */
    defaultSuggestions: {
      //g: ['g/issues', 'g/pulls', 'gist.github.com'],
      //r: ['r/unixporn', 'r/startpages', 'r/webdev', 'r/technology'],
    },
  
    /**
     * Instantly redirect when a key is matched. Put a space before any other
     * queries to prevent unwanted redirects.
     */
    instantRedirect: false,
  
    /**
     * Open triggered queries in a new tab.
     */
    newTab: false,
  
    /**
     * Dynamic overlay background colors when command domains are matched.
     */
    colors: true,
  
    /**
     * Invert color theme
     */
    invertedColors: false,
  
    /**
     * Show keys instead of icons
     */
    showKeys: false,
  
    /**
     * The delimiter between a command key and your search query. For example,
     * to search GitHub for potatoes, you'd type "g:potatoes".
     */
    searchDelimiter: ':',
  
    /**
     * The delimiter between a command key and a path. For example, you'd type
     * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
     */
    pathDelimiter: '/',
  
    /**
     * The delimiter between the hours and minutes on the clock.
     */
    clockDelimiter: ':',
  
    /**
     * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
     */
    twentyFourHourClock: false,
  
    /**
     * Show AM/PM if twentyFourHourClock is false.
     */
    showAmPm: false,
  
    /**
     * File extension for icon images
     */
    iconExtension: 'png',
  
    /**
     * File extension for icon images
     */
    weatherApi: '38957ffe435ded320bff2396733c6ce4',
  
    /**
     * File extension for icon images
     */
    cityName: 'Maykop',
  
    /**
     * File extension for icon images
     */
    cityId: '528293',
  };
  