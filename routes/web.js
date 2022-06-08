import express from 'express';
const router = express.Router()
import UserController from '../controllers/UserController.js'

router.get('/', UserController.home)
router.get('/adminreg', UserController.adminreg)      //for admin
router.post('/adminreg', UserController.createUserDoc)

router.get('/registration', UserController.registration)       //for user
router.post('/registration', UserController.createUserDoc)


router.get('/smereg', UserController.smereg)       //for sme
router.post('/smereg', UserController.createUserDoc)

router.get('/index', UserController.login)
router.post('/index', UserController.verifyLogin)
router.get('/logout', UserController.logout)


export default router
