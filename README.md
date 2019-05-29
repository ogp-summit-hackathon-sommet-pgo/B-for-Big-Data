## Green City Navigator

Our hackathon objective was to address the following UN sustainability goal:

*Mobilize open data to identify the share of public use of open spaces in cities. What percentage is green space? How often are they used? How much open space is accessible to children? Older persons? Persons with disabilities?*

This web app was created as one portion of our solution, aimed at displaying potential methods with which we could interactively display information to citizens.

This interactive web app allows you to click on various neighbourhoods in Toronto in order to display information about green spaces and other features.

Unfortunately we ran into scalability issues where our data is too large, especially the green space data, to fit inside memory using D3. Development of a WebGL based version would likely solve these issues.

## Install instructions

To get the repo going simply run the following two commands:
```
yarn install
yarn start
```

## Scalability

At the moment, the current solution which utilizes d3 runs up the heap and crashes everything when more data is added. 

It is likely that we are pushing the limits of d3 here and would be better off utilizing a WebGL based solution instead.