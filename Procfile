# You can run these commands in separate shells
web: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}


# Next line runs a watch process with webpack to compile the changed files.
# When making frequent changes to client side assets, you will prefer building webpack assets
# upon saving rather than when you refresh your browser page.
worker: sh -c 'rm -rf public/packs/* || true && bundle exec rake react_on_rails:locale && bin/webpack -w'
