import routerx from 'express-promise-router';
import empresa from '../controller/empresas.controller';
const empresa_controller = new empresa();
const router = routerx();

router.post('/add', empresa_controller.add);
router.get('/list', empresa_controller.list);

/* router.put('/deactivate', );
router.put('/activate', );
router.delete('/remove', );
router.put('/update', );
router.get('/query', ); */


export default router;