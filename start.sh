#!/bin/sh

# Waiting database get ready do run migrations with Prisma
until npx prisma migrate dev; do
  echo "Database is unavailable - sleeping"
  sleep 1
done

# Init server
npm run dev