FROM node:20.13.1

WORKDIR /app

COPY . .

RUN rm .env
RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000

CMD ["node", "build/app.js"]
