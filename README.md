# Laravel + React + Vite + MUI + Tailwind CSS

### To run the project :

#### Front-end

_navigate to this folder_

`cd React-front-end`

_install the depedencies_

`npm i`

_run it in the dev mode_

`npm run dev`

#### Back-end

_navigate to this folder_

`cd Laravel-back-end`

_install the depedencies_

`composer install`

_generate_an_app_key_

`php artisan key:generate`

start Xampp server

_run the database migrations_
_(this command will take a couple of time around 2 minutes, because sveral images will be generated and stored on this your machine in the storage/app/public/images folder)_

`php artisan app:run-migrations`

_create a symblic link to the images storage_

`php artisan storage:link`

_run the project_

`php artisan serve`
