FROM node:20

WORKDIR /app

COPY . .

RUN npm i -g pnpm

RUN pnpm i

RUN pnpm i @prisma/client --save-dev

RUN npx prisma generate

EXPOSE 3000

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]