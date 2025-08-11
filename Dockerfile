# Use the official PHP 8.2 image with Apache
FROM php:8.2-apache

# Enable Apache's rewrite module for our .htaccess file to work
RUN a2enmod rewrite

# Install the MySQLi extension that our PHP code needs
RUN docker-php-ext-install mysqli && docker-php-ext-configure mysqli && docker-php-ext-enable mysqli

# Copy all our project files into the container's web root
COPY . /var/www/html/

# Install Composer (PHP's package manager)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Run 'composer install' to install our PHP dependencies (like the 'dotenv' package)
RUN composer install --no-interaction --no-plugins --no-scripts --prefer-dist

# Expose port 80 to the outside world
EXPOSE 80