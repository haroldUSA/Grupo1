BEGIN
    DELETE FROM MESSAGE where ID=:id;
    :status_code:=204;
end;