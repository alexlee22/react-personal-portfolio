// External Link Icon, Used in Links
import externalLink from "./images/external-link-alt-solid.svg";
export const EXTERNAL_LINK = externalLink;


/*
    SPLASH
    
    - Used in  `src/components/Splash.jsx`
    - Icons provided from fontawsome
*/
import envelope from "./images/splash/envelope-solid.svg";
import github from "./images/splash/github-square-brands.svg";
import linkedin from "./images/splash/linkedin-brands.svg";
import down from "./images/splash/chevron-down-solid.svg";

export const DATA_SPLASH = {
    "name": "John Doe",
    "title": "Sub-Title",
    "links":[
        {
            "name": "linkedin",
            "icon": linkedin,
            "link": "#",
            "alt": "LinkedIn link"
        },
        {
            "name": "github",
            "icon": github,
            "link": "https://github.com/",
            "alt": "Github link"
        },
        {
            "name": "email",
            "icon": envelope,
            "link": "mailto:PUT-EMAIL-HERE",
            "alt": "Email link"
        }
    ],
    "down": down    // Icon for the down arrow
}


/*
    BIO
    
    - Used in  `src/components/Bio.jsx`
    - Paragraphs are divided as a list of strings
*/
export const DATA_BIO = {
    "text": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar nisi vitae tempor porttitor. Vivamus varius in eros congue accumsan. Quisque auctor libero sed tellus condimentum dignissim.",
        "Morbi tempor nisl in luctus vulputate. In hac habitasse platea dictumst. Integer ac massa eget leo efficitur volutpat. Suspendisse convallis velit vitae orci euismod, quis hendrerit velit ullamcorper.",
        "Cras justo dolor, dictum eget eros in, commodo vulputate nulla. Suspendisse vulputate id elit aliquam blandit. Phasellus sapien urna, tincidunt a tortor et, ornare condimentum tortor."
    ],
};


/*
    TOOLBOX/SKILLS
    
    - Used in  `src/components/Toolbox.jsx`
    - Each Box/Container is its own object within the list:
        - Each contains:
            * title -> heading of container,
            * image -> icon,
            * tools -> list of dotpoints
*/
import development from "./images/toolbox/code-solid.svg";
import cubes from "./images/toolbox/cubes-solid.svg";
import window from "./images/toolbox/window-regular.svg";

export const DATA_TOOLBOX = [
    {
        "title": "Dogs",
        "tools": [
            "Bulldog",
            "Lab",
            "Poodle",
            "Pug"
        ],
        "image": development
    },
    {
        "title": "Cats",
        "tools": [
            "Persian",
            "Maine",
            "Siamese",
            "Bengal"
        ],
        "image": window
    },
    {
        "title": "Birds",
        "tools": [
            "Sparrow",
            "Hawk",
            "Woodpecker"
        ],
        
        "image": cubes
    }
]

/*
    PORTFOLIO
    
    - Used in `src/components/Portfolio.jsx`
    - Images are from unsplash (credit provided)
    - Each Project is its own object within the list:
        - Each contains:
            * title -> heading of container,
            * desc -> fill description,
            * links -> list of objects with:
                * desc -> text for the link (inside the <a>)
                * url -> actual link
            * image -> image of project in its own container,
            * alt -> alt text for the project
*/
import harleyDavidson from "./images/project/harley-davidson-npZR4G67ev8-unsplash.jpg";
import hannahBusing from "./images/project/hannah-busing-f0iHba5bSlQ-unsplash.jpg";
import troyDuncan from "./images/project/troy-duncan-1YP1idcknWw-unsplash.jpg";

export const DATA_PORTFOLIO = [
    {
        "title": "Harley-Davidson",
        "desc": "Photo by Harley-Davidson on Unsplash",
        "links":[
            {
                "desc": "Unplash",
                "url": "https://unsplash.com/photos/npZR4G67ev8"
            }
        ],
        "image": harleyDavidson,
        "alt": "Image by Harley-Davison from Unsplash"
    },
    {
        "title": "Hannah Busing",
        "desc": "Photo by Hannah Busing on Unsplash",
        "links":[
            {
                "desc": "Unplash",
                "url": "https://unsplash.com/photos/f0iHba5bSlQ"
            }
        ],
        "image": hannahBusing,
        "alt": "Image by Hannah Busing from Unsplash"
    },
    {
        "title": "Troy Duncan",
        "desc": "Photo by Troy Duncan on Unsplash",
        "links":[
            {
                "desc": "Unplash Link",
                "url": "https://unsplash.com/photos/1YP1idcknWw"
            },
            {
                "desc": "Another Unplash Link",
                "url": "https://unsplash.com/photos/1YP1idcknWw"
            }
        ],
        "image": troyDuncan,
        "alt": "Image by Troy Duncan from Unsplash"
    },
]


/*
    EXPERIENCE
    
    - Used in `src/components/Experience.jsx`
    - Each container is its own object within the list:
        - Each contains:
            * title -> heading of container,
            * company -> name of the company under the title,
            * dates -> object with strings of `start` and `end`
            * notes -> list of strings for dotpoints
*/
export const DATA_EXPERIENCE = [
    {
        "title": "Senior Fisherman",
        "company": "Fish Architecture",
        "date": {
            "start": "January 2018",
            "end": "Present"
        },
        "notes": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Nam nec leo eu leo condimentum mattis sit amet consectetur erat.",
            "Phasellus a laoreet sem. Maecenas elementum consequat luctus."
        ],
    },
    {
        "title": "Professional Cake Tasting",
        "company": "Just Eats",
        "date": {
            "start": "March 2016",
            "end": "December 2018"
        },
        "notes": [
            "Phasellus ac finibus tellus, at interdum dui. Phasellus placerat velit at odio tincidunt feugiat. Nullam placerat bibendum imperdiet.",
            "Donec sed augue quis ligula gravida maximus at non ante.",
            "Vestibulum imperdiet tincidunt vulputate. Curabitur id orci ornare, suscipit elit eu, faucibus lacus."
        ],
    },
    {
        "title": "Pineapple Wizard",
        "company": "Fruits Are Us",
        "date": {
            "start": "October 2015",
            "end": "March 2017"
        },
        "notes": [
            "Maecenas commodo cursus rhoncus. Morbi pretium et nibh non imperdiet. Pellentesque bibendum nisi id lectus convallis tristique id eget urna.",
            "Mauris sollicitudin justo eget dignissim semper. Morbi suscipit ipsum risus, sed cursus magna mattis id."
        ],
    }
];


/*
    CONTACT/END
    
    - Used in `src/components/Contact.jsx`
    - Contains a list of Objects containing:
        * icon -> image
        * label -> text content
*/
import location from "./images/contact/map-marker-alt-solid.svg";

export const DATA_CONTACTS = {
    "bar": [
        {
            "icon": envelope,
            "label": "hello@email.com"
        },
        {
            "icon": location,
            "label": "Antarctica"
        }

    ]

}
    