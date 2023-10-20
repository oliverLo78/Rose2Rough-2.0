DROP DATABASE IF EXISTS review_db;
CREATE DATABASE review_db

USE review_db;

CREATE TABLE wines (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  wine_name VARCHAR(100) NOT NULL
);

INSERT INTO wines (wine_name)
VALUES ("Josh Cellars"),
       ("Grape Creek Cellars"),
       ("Fuentevina"),
       ("Habersham"),
       ("Monteluce"),
       ("Peters Cellars"),
       ("Homewood"),
       ("NV CaliW Blend");

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  country TEXT NOT NULL,
  description TEXT NOT NULL,
  designation TEXT not null,
  points INT not null, 
  price INT not null,
  province TEXT not  null,
  region_1 TEXT not NULL,
  region_2 TEXT not null,
  taster_name VARCHAR(30) not null,
  title VARCHAR(30) not null,
  variety VARCHAR(30) not null,
  winery VARCHAR(30) not null,
);

INSERT INTO reviews ( country, description, points, price, province, region_1, taster_name, title, variety, winery)
VALUES ("Australia", 
        "Turned convicts into colonists, Upon conviction, British regnes, guilty of at least of the 19 crimes, were sentenced to live Australia rather than death.", 
         92, 
         12, 
        "South Eastern Australia", 
        "Zoraida Lopez", 
        "19 Crimes Cabernet Sauvignon",
         "Red Wine",
        "19 Crimes")

INSERT INTO reviews ( country, description, designation, points, price,  province, region_1, region_2, taster_name, taster_twitter_handle, title, variety, winery)
VALUES ( "Italy", 
		 "Aromas include tropical fruit, broom, brimstone and dried herb. The palate isn't overly expressive, offering unripened apple, citrus and dried sage alongside brisk acidity.", 
		 "Vulkà Bianco", 
		  87, 
		  45, 
		 "Sicily & Sardinia", 
		 "Etna", 
		   50, 
		 "Kerin O’Keefe",
		 "@kerinokeefe",
		 "Nicosia 2013 Vulkà Bianco (Etna)",
		 "White Blend", "Nicosa");