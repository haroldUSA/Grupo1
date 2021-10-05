BEGIN
    DELETE FROM COSTUME WHERE ID = :id;
    :status_code := 204;
    END;