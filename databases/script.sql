CREATE DATABASE pet_is_life;
use pet_is_life;

CREATE TABLE pet_is_life.user (
	id int(10) PRIMARY KEY auto_increment,
	name varchar(200),
    phone bigint(11),
	email varchar(200),
    rg varchar(15),
    image varchar(250),
	password varchar(256),
	created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pet_is_life.offers (
	id int(10) PRIMARY KEY auto_increment,
    discout decimal,
	created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pet_is_life.brand (
	id int(10) PRIMARY KEY auto_increment,
	name varchar(255),
	created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pet_is_life.category (
	id int(10) PRIMARY KEY auto_increment,
	name varchar(200),
	created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pet_is_life.product (
	id int(10) PRIMARY KEY auto_increment,
	name varchar(200),
    aumont bigint,
    preco decimal,
    status boolean,
    description varchar(255),
    image varchar(250),
    category_id int,
    brand_id int,
    FOREIGN KEY (brand_id) REFERENCES brand(id),
    FOREIGN KEY (category_id) REFERENCES category(id),
	created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pet_is_life.address (
	id int(10) PRIMARY KEY auto_increment,
    road varchar(200),
    number int(10),
    zipcode int(8),
    district varchar(200),
	reference varchar(200),
    user_id int,
    FOREIGN KEY (user_id) REFERENCES user(id),
	created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);

CREATE TABLE pet_is_life.sales (
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    user_id int,
    address_id int,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (address_id) REFERENCES address(id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
