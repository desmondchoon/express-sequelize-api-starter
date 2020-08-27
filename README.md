# What is this?
This is a starter for an API server running on ExpressJS, Sequelize ORM, and already comes with Jest to test your API straight out of the box.

## How do I begin?
1. Clone this repo.
2. Install using `yarn` or `npm i`.
3. You are ready. Run `yarn test` or `npm run test` to test out the set up.

## What is customized?
For the sake of organization, all database related files and folders are stored in `database` folder. This differs from Sequelize's default behaviour, which is catered using the `.sequelizerc` file. 

With the config, running `npx sequelize-cli` will regard the `database` folder as its root.

## Where do I put my tests?
The tests live within the `__tests__` folder; similar to Jest's default behavior. Nothing fancy.
