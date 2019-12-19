#!/bin/bash
rm -f /clinwiki/tmp/pids/server.pid
bundle install
bundle exec rake db:create
bundle exec rake db:migrate
./front/scripts/build

# This line executes the CMD from Dockerfile, command from docker-compose file or if you docker run
exec "$@"