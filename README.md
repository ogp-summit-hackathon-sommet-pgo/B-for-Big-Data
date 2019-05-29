## Green City Navigator

## Install instructions

To get the repo going simply run the following two commands:
```
yarn install
yarn start
```

## Scalability

At the moment, the current solution which utilizes d3 runs up the heap and crashes everything when more data is added. 

It is likely that we are pushing the limits of d3 here and would be better off utilizing a WebGL based solution instead.