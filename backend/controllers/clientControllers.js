import asyncHandler from 'express-async-handler'
import Client from '../models/clientModel.js'

// @desc      Get client
// @route     Get /api/client
// @access    Public
const getClient = asyncHandler(async (req, res) => {
  const clients = await Client.find({})
  res.json(clients)
})

// @desc      Create client
// @route     Post /api/client
// @access    Public
const createClient = asyncHandler(async (req, res) => {
  const { name, email, phone, currentAddress, age } = req.body

  const client = new Client({
    name,
    email,
    phone,
    currentAddress,
    age,
  })

  const createdClient = await client.save()

  console.log('clientControllers.js', createdClient)

  res.status(201).json(createdClient)
})

export { createClient, getClient }
