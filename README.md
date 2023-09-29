# Laravel + React + Vite + MUI + Tailwind CSS

### To run the project :

#### Front-end

**navigate to this folder**

`cd React-front-end`

**install the depedencies**

`npm i`

_run it in the dev mode_

`npm run dev`

#### Back-end

**navigate to this folder**

`cd Laravel-back-end`

**install the depedencies**

`composer install`

**generate_an_app_key**

`php artisan key:generate`

**start Xampp server**

**run the database migrations**

(this command will take a couple of time around 2 minutes, because around 15 images will be generated and stored on your machine in the storage/app/public/images folder)

`php artisan app:run-migrations`

**create a symblic link to the images storage**

`php artisan storage:link`

**run the project**

`php artisan serve`
