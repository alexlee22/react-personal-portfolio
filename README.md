# react-personal-portfolio

A one-page portfolio created with [Parcel](https://parceljs.org/) and [ReactJS](https://reactjs.org/). Currently a work in progress and a copy of my current personal site. Aimed to convert with [GatsbyJS](https://www.gatsbyjs.org/).

## Table of Contents

1. Setup
2. Run in `dev env`
3. Deploy
4. Data structure
5. Things to change
6. Wishlist

## 1. Setup

This build was created using `Node v11.11.0` and `npm v6.7.0`. Ensure both can be run through your command line (CMD). You can [download NodeJS here](https://nodejs.org/en/download/).

To install the required packages:

1. Clone/Download the repo,
2. Navigate to the directory: `./react-personal-portfolio`,
3. Run the command, `npm install`

## 2. Run in `dev env`

Running the `dev` will allow you to make and view changes fast. Use this command to help make changes to your site before deploying.

To run the site in development and be hosted on your computer, run the command `npm run dev` and navigate to `localhost:1234` in your web browser (recommended chrome). Another port will be announced if `1234` is already in use.

## 3. Deploy

There are two ways to build the static files for deployment. Check the settings and below for more info.

#### Build

You can generate static pages, ready for hosting, by running the command `npm run build`. The files will be located in the folder directory `./dist/`. These are ready to host files. For deploying on Github Pages, look at the below command for configurations.

#### Build For `GitHub Pages`

To build the static files for GitHub pages, instead, run the command `npm run buildGHPages`. This will generate the static files inside the folder `./docs`, ready for deployment to GitHub pages.

NOTE: In the options `--public-url`, replace the text `/react-personal-portfolio/` with the name of your repo or `./` if you are hosting on `username.github.io`.

After committing the files, to activate Github pages hosting:

1. Navigate to the Github repo in your browser,
2. Enter the `settings` by clicking on the tab (next to `insights`, and under `Fork`),
3. Scroll down to the title `GitHub Pages`,
4. Under `Source`, select one of the following options: `master branch` or `master branch /docs folder`.

After picking an option, a message in green will display something like this: ` Your site is published at https://username.github.io/react-personal-portfolio/` or the name of your repo or `https://username.github.io/`, depending on your settings

## 4. Data structure

Soon

## 5. Things to change

Soon

## 4. Wishlist

Here are some of the additions I aim to or wish to add soon:

- Add more content to `README` with images,
- Add a better visualisation for the splash screen,
- Integrate `GatsbyJS` for a blog + static pages