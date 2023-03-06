ALGORITHM three_nb_add
VAR
    NUM1, NUM2, NUM3 : INTEGER;
    SUM : INTEGER:=0;
BEGIN
    READ(NUM1);
    READ(NUM2);
    READ(NUM3);
    SUM := NUM1 + NUM2 + NUM3;
    Write (SUM);
END