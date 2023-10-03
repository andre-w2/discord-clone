## Setup

#### Создайте файл .env и поместите туда свои данные:

#1 перейдите на страницу [clerk](https://clerk.com/) и создайте аккаунт если нету и после успешного входа, выберите методы авторизации и после вам выдадут данные:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxx
CLERK_SECRET_KEY=xxxx
```

#2
```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

#3 Подключение к базе данных
```bash
DATABASE_URL="mysql://root:root@localhost/discord?schema=public"
```

#4 Подключение [uploadthing](https://uploadthing.com)
```bash
UPLOADTHING_SECRET=xxxx
UPLOADTHING_APP_ID=xxx
```