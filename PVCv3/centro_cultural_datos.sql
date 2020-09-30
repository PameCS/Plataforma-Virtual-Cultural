INSERT INTO `centro_cultural`.`T_USER`
	(`PK_idUser`, `password`, `role`)
    VALUES
		('402070400', 'admin', 0),
		('112390384', 'admin', 1)
	;
   
    INSERT INTO `centro_cultural`.`T_ADMIN`
	(`PK_idAdmin`, `FK_user_id_user`, `last`,`name`,`telephone`,`email`)
    VALUES
		('402070400', '402070400','Granda Vargas','Joseph',87276862,'informatica@sanpablo.go.cr'),
		('112390384', '112390384', 'Bonilla Salas', 'Luis',86180772,'lbonilla@sanpablo.go.cr')
	;
    