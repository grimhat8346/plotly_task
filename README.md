## Plotly task
Using website: https://www.cypress.io/ Write test for following test cases:
- Users are able to visit the website and able to scroll down to “Loved by OSS, trusted by Enterprise” and see the weekly downloads number.
- User is able to click on Company and then on “About Cypress”
- User is able to click on “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress --save-dev”
- User is able to click on “Product” and then “visual review” Bonus:
- User is able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that the green circle is around “Test Analytics”

# Run test using Cypress
 1. 'npm init'
 2. 'npm install'
 3. 'npx cypress run' (to run with UI 'npx cypres open')

 # Run test using docker
 1. Download image from docker hub (https://hub.docker.com/repository/docker/grimhat/plotly-test/general)
 2. 'docker run plotly-test' in console