# Description

This is a simple back end server to connect to a database and perform CRUD operations for the Forodain front end.

# Configuration

The server is currently configured to be deplyed on Render and connect to a MongoDB Atlas database. The database connection string details are stored as environment variables. The server will look for the following environment variables:

PORT
DB_CONN_STRING
DB_NAME
STORIES_COLLECTION_NAME