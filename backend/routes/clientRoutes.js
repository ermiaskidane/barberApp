import express from 'express'
import asyncHandler from 'express-async-handler'
import { getClient, createClient } from '../controllers/clientControllers.js'

const router = express.Router()
import Client from '../models/clientModel.js'

router.route('/').get(getClient).post(createClient)

export default router
