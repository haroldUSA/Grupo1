BEGIN
    DELETE FROM CUSTOME where ID=:id;
    :status_code:=204;
end;