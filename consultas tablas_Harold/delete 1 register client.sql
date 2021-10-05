BEGIN
    DELETE FROM CLIENT where ID=:id;
    :status_code:=204;
end;