#!/bin/sh

yarn test && yarn build && yarn version "$1" && yarn npm publish --access public
