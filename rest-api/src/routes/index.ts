import routerx from 'express-promise-router';
import empresa_router from './router.empresas';

const router = routerx();

router.use('/empresa', empresa_router);


export default router;