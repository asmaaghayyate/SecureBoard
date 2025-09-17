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
        // إنشاء أدوار
        $adminRole = Role::firstOrCreate(['name' => 'admin'], ['display_name' => 'Administrator']);
        $userRole = Role::firstOrCreate(['name' => 'user'], ['display_name' => 'User']);

        // إنشاء مستخدم admin
        $admin = User::firstOrCreate(
            ['email' => 'aya@test.com'],
            ['name' => 'Aya', 'password' => bcrypt('password')]
        );

        // ربط الدور بالـ admin
        $admin->attachRole($adminRole);

        // إنشاء صلاحية
        $permission = Permission::firstOrCreate(
            ['name' => 'manage-users'],
            ['display_name' => 'Manage Users']
        );

        // ربط الصلاحية بالدور
        $adminRole->attachPermission($permission);
    }
}
