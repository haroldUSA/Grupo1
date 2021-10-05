BEGIN
    update MESSAGE set MESSAGE=:message WHERE ID=:id;
    :status_code:=201;
end;