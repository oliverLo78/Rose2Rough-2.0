DROP DATABASE IF EXISTS review_db;
CREATE DATABASE review_db

USE review_db;

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  country TEXT NOT NULL,
  description TEXT NOT NULL,
  designation TEXT not null,
  points INT not null, 
  price INT not null,
  province TEXT not  null,
  region TEXT not NULL,
  taster_name VARCHAR(30) not null,
  title VARCHAR(30) not null,
  variety VARCHAR(30) not null,
  winery VARCHAR(30) not null,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO reviews (
    country, 
    description, 
    points, 
    price, 
    province, 
    region, 
    taster_name, 
    title, 
    variety, 
    winery)
VALUES ("Australia", 
        "Turned convicts into colonists, Upon conviction, British regnes, guilty of at least of the 19 crimes, were sentenced to live Australia rather than death.", 92, 12, 
        "South Eastern Australia", "Zoraida Lopez", 
        "19 Crimes.", "Red Wine", "19 Crimes.")