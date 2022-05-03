drop database if exists dbapp;
create database dbapp;
use dbapp;

drop table if exists dbpessoas;
create table pessoas (
  id int not null auto_increment,
  nome varchar(100) not null, 
  idade int default 0,
  updated_at datetime not null,
  created_at datetime not null,
  primary key (id)
);

insert into pessoas (id, nome, idade, updated_at, created_at) values (1, 'Fernando', 20, now(), now());
insert into pessoas (id, nome, idade, updated_at, created_at) values (2, 'Roberto', 17, now(), now());
insert into pessoas (id, nome, idade, updated_at, created_at) values (3, 'Marcela', 22, now(), now());
insert into pessoas (id, nome, idade, updated_at, created_at) values (4, 'Isadora', 25, now(), now());
insert into pessoas (id, nome, idade, updated_at, created_at) values (5, 'Humberto', 32, now(), now());
