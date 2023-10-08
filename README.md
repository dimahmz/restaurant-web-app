# Laravel + React + Vite + MUI + Tailwind CSS

### To run the project :

#### Front-end

**navigate to this folder**

`cd React-front-end`

**install the depedencies**

`npm i`

**start vite server**

`npm run dev`

#### Back-end

**navigate to this folder**

`cd Laravel-back-end`

**install the depedencies**

`composer install`

**generate_an_app_key**

`php artisan key:generate`

**start Xampp server**

**create a symblic link to the images storage**

before this command create a folder called images in this folder storage/app/public/images

`php artisan storage:link`

**run the database migrations**
`php artisan migrate`

`php artisan app:run-migrations`

(hint: the cammand will take some time, due to the images genration and the storing in the local disk)

**start laravel server**

`php artisan serve`
