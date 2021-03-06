exports.seed = function(knex, Promise) {
  return knex("activity")
    .del()
    .then(() =>
      knex("activity")
        .insert([
          {
            id: 1,
            interest: "science",
            articleURL: "https://apnews.com/7fb0980b01e44421af41e6ef530c20b7",
            headline: "Trump Vindicated",
            image:
              "https://storage.googleapis.com/afs-prod/media/media:c0a0996113e24273884ea1c9fb6b71cd/800.jpeg",
            timeReading: 10,
            date: "Fri Feb 02 2018",
            _userId: 1
          },
          {
            id: 2,
            interest: "science",
            articleURL:
              "https://www.reuters.com/article/brief-winsan-medical-science-and-technol/brief-winsan-medical-science-and-technology-to-sell-stake-and-creditors-rights-in-unit-for-totaling-96-8-mln-yuan-idUSL3N1NT2UI",
            headline:
              "BRIEF-Winsan (Shanghai) Medical Science and Technology to sell stake and creditor's rights in unit for totaling 96.8 mln yuan",
            image:
              "https://s4.reutersmedia.net/resources_v2/images/rcom-default.png",
            timeReading: 15,
            date: "Thu Feb 01 2018",
            _userId: 1
          },
          {
            id: 3,
            interest: "sports",
            articleURL:
              "https://www.reuters.com/article/us-sporting-goods-retailers-stocks/sports-retail-stocks-jump-after-upbeat-reports-idUSKBN1DH1O4",
            headline: "Sports retail stocks jump after upbeat reports",
            image:
              "https://s4.reutersmedia.net/resources/r/?m=02&d=20171117&t=2&i=1210245390&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPEDAG0ZV",
            timeReading: 30,
            date: "Sat Feb 03 2018",
            _userId: 1
          },
          {
            id: 4,
            interest: "business",
            articleURL:
              "https://www.reuters.com/article/britain-press-business/press-digest-british-business-dec-21-idUSL4N1OL040",
            headline: "PRESS DIGEST- British Business - Dec 21",
            image:
              "https://s4.reutersmedia.net/resources_v2/images/rcom-default.png",
            timeReading: 5,
            date: "Mon Feb 05 2018",
            _userId: 1
          },
          {
            id: 5,
            interest: "business",
            articleURL: "http://www.bbc.com/news/live/business-42280595",
            headline: "Business Live: Westfield takeover - BBC News",
            image:
              "http://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1",
            timeReading: 25,
            date: "Tue Feb 06 2018",
            _userId: 1
          },
          {
            id: 6,
            interest: "world",
            articleURL:
              "https://www.lrb.co.uk/v40/n03/nick-richardson/even-what-doesnt-happen-is-epic",
            headline: "Nick Richardson: Chinese SF",
            image:
              "https://cdn.lrb.co.uk/assets/covers/q/cov4003.jpg?1517403196",
            timeReading: 45,
            date: "Wed Feb 07 2018",
            _userId: 1
          },
          {
            id: 7,
            interest: "world",
            articleURL:
              "https://www.lrb.co.uk/v40/n03/frederick-wilmot-smith/short-cuts",
            headline: "Frederick Wilmot-Smith: Environmental Law",
            image:
              "https://cdn.lrb.co.uk/assets/covers/q/cov4003.jpg?1517403196",
            timeReading: 5,
            date: "Sun Feb 04 2018",
            _userId: 1
          },
          {
            id: 8,
            interest: "technology",
            articleURL:
              "https://www.lrb.co.uk/v40/n03/nick-richardson/even-what-doesnt-happen-is-epic",
            headline: "Nick Richardson: Chinese SF",
            image:
              "https://cdn.lrb.co.uk/assets/covers/q/cov4003.jpg?1517403196",
            timeReading: 30,
            date: "Mon Feb 05 2018",
            _userId: 1
          },
          {
            id: 9,
            interest: "technology",
            articleURL:
              "https://www.sans.org/webcasts/cyber-threat-intelligence-skills-usefulness-cti-survey-results-2-105815",
            headline:
              "Special Webcast: Cyber Threat Intelligence Skills and Usefulness: SANS CTI Survey Results, Part 2",
            image: "http://www.edweek.org/images/educationweek-facebook.png",
            timeReading: 10,
            date: "Tue Feb 06 2018",
            _userId: 1
          },
          {
            id: 10,
            interest: "health",
            articleURL:
              "http://www.sfgate.com/news/medical/article/Herbal-supplement-kratom-contains-opioids-12555913.php",
            headline:
              "Herbal supplement kratom contains opioids, regulators say",
            image:
              "http://www.sfgate.com/img/pages/article/opengraph_default.png",
            timeReading: 15,
            date: "Wed Feb 07 2018",
            _userId: 1
          },
          {
            id: 11,
            interest: "food",
            articleURL:
              "http://www.seattlepi.com/news/article/Woman-prepares-salad-sticks-fork-into-3-inch-12555159.php",
            headline: "Woman prepares salad, sticks fork into 3-inch lizard",
            image:
              "http://www.seattlepi.com/img/pages/article/opengraph_default.png",
            timeReading: 30,
            date: "Sat Feb 03 2018",
            _userId: 1
          }
        ])
        .then(() => knex.raw("ALTER SEQUENCE activity_id_seq RESTART WITH 12;"))
    );
};
