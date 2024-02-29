# Build an LMS Platform: Next.js 13, React, Stripe, Mux, Prisma, Tailwind, MySQL | Full Course 2023

This is a repository for Build an LMS Platform: Next.js 14, React, Stripe, Mux, Prisma, Tailwind, MySQL (I Use Aiven for MySQL to deploy this project online live ) | Full Course 2023

Open stripe CLi as admin

incomplete step 1
Download the CLI and log in with your Stripe account

# open cmd in the stripe cli folder and

# type this ->stripe login

# then will get like this url

# https://dashboard.stripe.com/stripecli/confirm_auth?t=gnbA6kpDsqEJLROnw4smcpGMHToiJFjd

# run this again

# stripe listen --forward-to localhost:3000/api/webhook

Key Features:

- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MySQL database using MySQL

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/challelign/learning-management-system.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_TEACHER_ID=
```

### Setup Prisma

Add MySQL Database

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
