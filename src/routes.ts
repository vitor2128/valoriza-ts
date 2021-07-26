import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { CreateAwardsController } from "./controllers/CreateAwardsController";
import { ListAwardController } from "./controllers/ListAwardController";
import { CreateRewardController } from "./controllers/CreateRewardController";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUserController()
const createAwardController = new CreateAwardsController()
const listAwardController = new ListAwardController()
const createRewardController = new CreateRewardController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticate, createComplimentController.handle)
router.post('/awards', ensureAuthenticate, ensureAdmin, createAwardController.handle)
router.post('/rewards', ensureAuthenticate, createRewardController.handle)

router.get("/users/compliments/send", ensureAuthenticate, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticate, listUserReceiveComplimentsController.handle)
router.get("/tags", ensureAuthenticate, listTagsController.handle)
router.get("/awards", ensureAuthenticate, listAwardController.handle)
router.get("/users", ensureAuthenticate, ensureAdmin, listUsersController.handle)

export { router}