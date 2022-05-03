FROM php:7.4-apache
RUN a2enmod rewrite
COPY ./config/000-default.conf /etc/apache2/sites-available/
RUN service apache2 restart
RUN chmod -R 777 /var/www/html/
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN docker-php-ext-install pdo && docker-php-ext-enable pdo
RUN docker-php-ext-install pdo_mysql && docker-php-ext-enable pdo_mysql