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

**start Xampp server**

before this command create a folder called images in this folder storage/app/public/images

**create a symbolic link to the images storage**

before running this command, make sure to create a folder named "images" inside the "storage/app/public" folder

`php artisan storage:link`

**run the database migrations**

`php artisan app:run-migrations`

Please note that the command will take some time because it needs to generate images and store them on the local disk.

**start laravel server**

`php artisan serve`
