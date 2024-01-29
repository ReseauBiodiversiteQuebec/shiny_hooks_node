#!/bin/bash

sudo -u shiny -H sh -c "cd /srv/shiny-server/tableau-comparateur_sdm && git pull origin main" 
sudo service shiny-server restart
