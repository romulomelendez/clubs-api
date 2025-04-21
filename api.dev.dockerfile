FROM node:20

WORKDIR /app

COPY . .

RUN npm i

RUN npm i @prisma/client --save-dev

RUN npx prisma generate

EXPOSE 3000

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]