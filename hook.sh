#!/bin/bash

# First, get the zip file
wget -O projectmaster.zip -q https://github.com/mlolson/org.geppetto.frontend/archive/master.zip

# Second, unzip it, if the zip file exists
if [ -f ./projectmaster.zip ]; then
    # Unzip the zip file
    unzip -q ./projectmaster.zip

fi