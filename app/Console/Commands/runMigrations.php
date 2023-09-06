<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class runMigrations extends Command
{
    protected $signature = 'app:run-migrations';

    protected $description = 'Run migrations from multiple folders';
    public function handle()
    {
        //
        $folders = ['restaurant', 'users', 'foods', "stock", "users", "orders"];

        Artisan::call('migrate:fresh');

        foreach ($folders as $folder) {
            $this->info("Migrations in folder '{$folder}' have been executed.");
            $path = "database/migrations/{$folder}";
            $this->call('migrate', [
                '--path' => $path,
            ]);
        }
    }
}
