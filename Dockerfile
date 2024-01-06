# Use the official Cypress base image
FROM cypress/included:13.6.2

# Set working directory to ensure files are copied to the correct place
WORKDIR /e2e

# Copy your test suite into the container
COPY . /e2e

# Confirm cypress can run
RUN npx cypress verify

# Execute the tests
CMD ["npx", "cypress", "run"]