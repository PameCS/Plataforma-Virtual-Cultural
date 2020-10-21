-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema centro_cultural
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema centro_cultural
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `centro_cultural` DEFAULT CHARACTER SET utf8 ;
USE `centro_cultural` ;

-- -----------------------------------------------------
-- Table `centro_cultural`.`T_EVENT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `centro_cultural`.`T_EVENT` (
  `PK_idEvent` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `date` DATE NULL,
  `place` VARCHAR(45) NOT NULL,
  `hour` VARCHAR(45) NULL DEFAULT 'xxxx',
  PRIMARY KEY (`PK_idEvent`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `centro_cultural`.`T_CLASSROOM`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `centro_cultural`.`T_CLASSROOM` (
  `PK_idClass` INT NOT NULL,
  `capacity` INT NULL,
  `availability` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  PRIMARY KEY (`PK_idClass`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `centro_cultural`.`T_CUSTOMER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `centro_cultural`.`T_CUSTOMER` (
  `PK_idCustomer` INT NOT NULL,
  `password` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `tel` INT NULL,
  `email` VARCHAR(45) NULL,
  `adress` VARCHAR(45) NULL,
  PRIMARY KEY (`PK_idCustomer`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `centro_cultural`.`T_COURSE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `centro_cultural`.`T_COURSE` (
  `PK_courseCode` INT NOT NULL,
  `FK_idClass` INT NULL,
  `PK_idCustomer` INT NULL,
  `name` VARCHAR(45) NULL,
  `mode` VARCHAR(45) NULL,
  `startDate` DATE NULL,
  `finishDate` DATE NULL,
  `shedule` VARCHAR(45) NULL,
  `professor` VARCHAR(45) NULL,
  `studentQuantity` INT NULL,
  PRIMARY KEY (`PK_courseCode`),
  INDEX `fk_T_COURSE_T_CLASSROOM_idx` (`FK_idClass` ASC) VISIBLE,
  INDEX `fk_T_COURSE_T_CUSTOMER1_idx` (`PK_idCustomer` ASC) VISIBLE,
  CONSTRAINT `fk_T_COURSE_T_CLASSROOM`
    FOREIGN KEY (`FK_idClass`)
    REFERENCES `centro_cultural`.`T_CLASSROOM` (`PK_idClass`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_COURSE_T_CUSTOMER1`
    FOREIGN KEY (`PK_idCustomer`)
    REFERENCES `centro_cultural`.`T_CUSTOMER` (`PK_idCustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `centro_cultural`.`T_TICKET`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `centro_cultural`.`T_TICKET` (
  `PK_idTicket` INT NOT NULL,
  `FK_idEvent` INT NOT NULL,
  `FK_idCustomer` INT NOT NULL,
  `price` DOUBLE NULL,
  PRIMARY KEY (`PK_idTicket`, `FK_idEvent`, `FK_idCustomer`),
  INDEX `fk_T_TICKET_T_EVENT1_idx` (`FK_idEvent` ASC) VISIBLE,
  INDEX `fk_T_TICKET_T_CUSTOMER1_idx` (`FK_idCustomer` ASC) VISIBLE,
  CONSTRAINT `fk_T_TICKET_T_EVENT1`
    FOREIGN KEY (`FK_idEvent`)
    REFERENCES `centro_cultural`.`T_EVENT` (`PK_idEvent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_TICKET_T_CUSTOMER1`
    FOREIGN KEY (`FK_idCustomer`)
    REFERENCES `centro_cultural`.`T_CUSTOMER` (`PK_idCustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `centro_cultural`.`T_USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `centro_cultural`.`T_USER` (
  `PK_idUser` INT NOT NULL DEFAULT 0,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `FK_idEvent` INT NULL,
  `FK_idClass` INT NULL,
  `FK_courseCode` INT NULL,
  PRIMARY KEY (`PK_idUser`),
  INDEX `fk_T_USER_T_EVENT1_idx` (`FK_idEvent` ASC) VISIBLE,
  INDEX `fk_T_USER_T_COURSE1_idx` (`FK_courseCode` ASC) VISIBLE,
  INDEX `fk_T_USER_T_CLASSROOM1_idx` (`FK_idClass` ASC) VISIBLE,
  CONSTRAINT `fk_T_USER_T_EVENT1`
    FOREIGN KEY (`FK_idEvent`)
    REFERENCES `centro_cultural`.`T_EVENT` (`PK_idEvent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_USER_T_COURSE1`
    FOREIGN KEY (`FK_courseCode`)
    REFERENCES `centro_cultural`.`T_COURSE` (`PK_courseCode`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_USER_T_CLASSROOM1`
    FOREIGN KEY (`FK_idClass`)
    REFERENCES `centro_cultural`.`T_CLASSROOM` (`PK_idClass`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
INSERT INTO `centro_cultural`.`t_user` (`PK_idUser`, `password`, `name`, `lastName`, `type`) VALUES ('112390384', 'admin', 'Luis ', 'Bonilla Salas', 'Administrador');
INSERT INTO `centro_cultural`.`t_user` (`PK_idUser`, `password`, `name`, `lastName`, `type`) VALUES ('402070400', 'adminS', 'Joseph', 'Granda Vargas', 'Super administrador');
INSERT INTO `centro_cultural`.`t_user` (`PK_idUser`, `password`, `name`, `lastName`, `type`) VALUES ('206070865', 'admin2', ' Iliana', 'Rojas Hernandez', 'Administrador');
INSERT INTO `centro_cultural`.`t_user` (`PK_idUser`, `password`, `name`, `lastName`, `type`) VALUES ('401580287', 'admin3', 'Mauricio', 'González González', 'Administrador');
INSERT INTO `centro_cultural`.`t_classroom` (`PK_idClass`, `capacity`, `availability`, `type`) VALUES ('1', '15', 'Disponible', 'Aula');
INSERT INTO `centro_cultural`.`t_classroom` (`PK_idClass`, `capacity`, `availability`, `type`) VALUES ('2', '15', 'Disponible', 'Aula');
INSERT INTO `centro_cultural`.`t_classroom` (`PK_idClass`, `capacity`, `availability`, `type`) VALUES ('3', '15', 'Disponible', 'Salon principal');
INSERT INTO `centro_cultural`.`t_course` (`PK_courseCode`, `name`, `mode`, `startDate`, `finishDate`, `shedule`, `professor`, `studentQuantity`) VALUES ('14', 'Curso de costura', '5', '2021-01-3', '2021-05-3', 'L,M', 'Daniela Gonzalez', '30');
