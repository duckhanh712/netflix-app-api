-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_enable` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NULL,
    `password` VARCHAR(255) NOT NULL,
    `gender` BOOLEAN NOT NULL DEFAULT true,
    `avatar` VARCHAR(191) NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_enable` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(255) NOT NULL,
    `type` INTEGER NOT NULL,
    `image` VARCHAR(255) NULL,
    `exec_time` INTEGER NULL,
    `status` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `no` INTEGER NOT NULL,
    `table_name` VARCHAR(255) NOT NULL,
    `customer_name` VARCHAR(255) NULL,
    `status` INTEGER NOT NULL,
    `memo` TEXT NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `related_id` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,
    `type` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NULL,
    `price` INTEGER NOT NULL,
    `count` INTEGER NOT NULL DEFAULT 1,
    `unit` VARCHAR(255) NOT NULL,
    `memo` TEXT NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_enable` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `status` INTEGER NOT NULL,
    `description` TEXT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu_item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `related_id` INTEGER NOT NULL,
    `menu_id` INTEGER NOT NULL,
    `type` INTEGER NOT NULL,
    `is_enable` BOOLEAN NOT NULL DEFAULT false,
    `memo` TEXT NOT NULL,
    `count` INTEGER NOT NULL DEFAULT 1,
    `unit` VARCHAR(255) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
