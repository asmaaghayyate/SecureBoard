<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;           
use Laratrust\Models\Role;
use Laratrust\Models\Permission;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Création du rôle admin
        $adminRole = Role::firstOrCreate(
            ['name' => 'admin'],
            ['display_name' => 'Administrator']
        );

        // Création d’un rôle user/client
        $userRole = Role::firstOrCreate(
            ['name' => 'user'],
            ['display_name' => 'User']
        );

        // Création de l’utilisateur admin
        $admin = User::firstOrCreate(
            ['email' => 'aya@test.com'],
            ['name' => 'Aya', 'password' => bcrypt('password')]
        );

        // Associer le rôle admin à l’utilisateur
        $admin->attachRole($adminRole);

        // Création d’une permission
        $permission = Permission::firstOrCreate(
            ['name' => 'manage-users'],
            ['display_name' => 'Manage Users']
        );

        // Associer la permission au rôle admin
        $adminRole->attachPermission($permission);
    }
}
