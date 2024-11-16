# filatique API

### About

That project was made just to practice in API creation. Filatique API was made to get info for Filatique music project web-site.


### Tech Stack
- Payload CMS
    - Postgres
    - Webpack
    - Express
- Docker Compose


### Data Structure

- 

### .env

```
# PG CREDS

POSTGRES_HOSTNAME="test-postgres"
POSTGRES_DB="test-db"
POSTGRES_USER="testuser"
POSTGRES_PASSWORD="testpassword"
POSTGRES_PORT=5433
POSTGRES_PGDATA=${POSTGRES_DB}-data


# PGADMIN CREDS 

PGADMIN_DEFAULT_EMAIL="test@test.com"
PGADMIN_DEFAULT_PASSWORD="testPassw0rd"
PGADMIN_CONFIG_SERVER_MODE="False"
PGADMIN_PORT=5555


# PAYLOAD VARS

PAYLOAD_SECRET=testSecret
DATABASE_URI=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@172.18.0.1:${POSTGRES_PORT}/${POSTGRES_DB}?connect_timeout=300
```

### Deployment

1. Clone repo
2. Create and fill .env
3. Install docker compose
4. run 

`docker compose up --build -d`

5. Open http://localhost:3000/admin


### TODO

[-] Check GET methods