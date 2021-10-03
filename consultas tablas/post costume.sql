BEGIN
insert into CUSTOME(ID,BRAND,MODEL,CATEGORIA_ID,NAME) VALUES(:id,:brand,:model,:categoria_id,:name);
:status_code:=201;
end;