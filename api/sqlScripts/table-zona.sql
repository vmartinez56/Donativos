CREATE TABLE zona (
  id INT NOT NULL AUTO_INCREMENT,
  nombre varchar(255) NOT NULL,
  idLiderZona INT,
     PRIMARY KEY (id),

        FOREIGN KEY (idLiderZona)
        REFERENCES colaborador(id)
)