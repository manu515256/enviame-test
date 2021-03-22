import routerx from 'express-promise-router';
import empresa from '../controller/empresas.controller';
const empresa_controller = new empresa();
const router = routerx();

router.post('/add', empresa_controller.add);
router.get('/list', empresa_controller.list);
router.get('/query', empresa_controller.query);
router.put('/update', empresa_controller.update);
router.delete('/remove', empresa_controller.delete);
router.put('/activate', empresa_controller.activate);
router.put('/deactivate', empresa_controller.deactivate);


export default router;