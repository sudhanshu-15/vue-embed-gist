## How to contribute

First of all thank you so much for using this plugin in your project, secondly I really appreciate you taking the initiative to consider contributing to this project. One of the fundamental goals of this project was to promote learning and if this is your first time contributing you are very welcome here and I hope it fun and exciting for you.

Some general technical overview to get you started and help understand the project better. 
PS: This is also for me to refer later 🙈

This project uses:
- [bili](https://bili.egoist.sh/#/) for bundling the library. It is simple and easy to use.
- Eslint for linting
- Jest for testing
- All source code resides in `src/`
  - To validate your changes run `npm run prepublishOnly`. This will run the test suite and also try to build the project. 😉 it might be wise to update the test cases in `test/`. 
- There is a test app in `example/` which uses this library and can be used for testing.
  -  The test app uses [poi](https://poi.js.org/) and is fairly simple to use.
  -  To test run `npm run example` and you should be good.
- The project uses [CircleCI](https://circleci.com/) as the CI solution, so any PR will be run on CI before it can be approved.

## Creating a pull request

Your new shiny feature is ready or you have tackled some nasty bug, what next? Nothing much just create a [Github Pull Request](https://github.com/sudhanshu-15/vue-embed-gist/pull/new/master). To make this smoother fill-in the details in the PR template.
Some best practices to consider while creating a pull request:
- Always good to refer an issue if it exists.
- Providing meaningful comments are good.
- Branches could be follow this naming `bug/issue-#-someDescription` or `feature/issue-#-someDescription`. eg: `feature/issue-7-addContributionGuides`
  - Even if you don't follow this convention it is fine, your contributions are always welcome. 🤗

## [Code of conduct](CODE_OF_CONDUCT.md)

Thank you again and happy contributing.