// Arquivo: src/router/base.ts

import { Router } from "express";

const router = Router();

router.get('/', function (req: any, res: any) {
    res.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
    });
});

router.get('/sobre', function (req: any, res: any) {
    res.send({
        name: 'Davi Lobato',
        email: 'davimlobato7@gmail.com',
        github: 'github.com/Davi-Lobato'
    });
});

export default router;