// import { makeExecutableSchema } from 'graphql-tools'
// import { fs } from 'fs'
// import * as axios from 'axios'
// import _ from 'lodash'
const { makeExecutableSchema } =  require('graphql-tools')
const fs = require('fs')
const axios = require('axios')
const _ = require('lodash')
const Vehicle = require('../models/Vehicle')
const Service = require('../models/Service')
const Job = require('../models/Job')

const getMakes = module.exports.getMakes = async (obj, args, context, info) => {
  const url =  `https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json`

  const result = await axios.get(url)
  return result.data.Count > 0 && _.sortedUniqBy(
      _.sortBy(
          _.filter(
              result.data.Results.map(
                  make=>
                      ({name: make.Mfr_CommonName})
              ),
                  o=> o.name !== null
          ), 'name'
      ), 'name'
  )
}

const getMake = async name => {
  const makes = await getMakes()
  return _.find(makes, { Mfr_CommonName: name })
}

const getVehicles = () => {
  return new Promise((resolve, reject)=>{
    Vehicle.find((err, results)=>{
      if(err){
        reject(err)
      }
      resolve(results.map(result=>({make: {name: result.make}, model: {name: result.model}, year: result.year, _id: result._id})))
    })
  })
}

const getVehicle = (obj, {_id})=>{
  return new Promise((resolve, reject)=>{
    Vehicle.findOne({_id}, (err, result)=>{
      if(err){
        reject(err)
      }
      resolve({
        make: {
          name: result.make,
        },
        model: {
          name: result.model,
        },
        year: result.year,
        _id: result._id,
      })
    })
  })
}

const getModels = module.exports.getModels = async (obj, { input: { make, year} }, context, info) => {
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make.name}/modelyear/${year}?format=json`

  const result = await axios.get(url)

  return result.data.Count > 0 && _.sortedUniqBy(
      _.sortBy(
          _.takeWhile(
              result.data.Results,
              ['Make_Name', make.name]
          ).map(model=>
              ({name : model.Model_Name, year})
          ), 'name'
      ),'name'
  )
}

const getServices = () => {
  return new Promise(
      (resolve, reject) => {
        Service.find((err, results) => {
          if (err) {
            reject(err)
          }
          resolve(results.map(result=>{
            return {
              ...result,
              name: result.name,
              difficulty: result.difficulty,
              suggestedServiceInterval: [result.suggestedServiceInterval],
              estimatedTimeToComplete: [result.estimatedTimeToComplete],
              notes: result.notes,
            }
          }))
        })
      }
  )
}

const getService = (_id) =>{}

const getJobs = () => {}

const getJob = (_id) => {}

const createVehicle = (obj, {input: {make, model, year}}, context, info) => {
  const vehicle = new Vehicle({make: make.name, model: model.name, year})
  return vehicle.save().then(vehicle => ({ ok: true, vehicle: { make, model, year} }))
}
const resolvers = {
  Query:{
    getMake,
    getMakes,
    getModels,
    getVehicles,
    getVehicle,
    getServices,
  },
  Mutation: {
    createVehicle,
  },
  Make: {
    models(obj, args, context, info) {
      return getModels(obj, args, context, info)
    }
  },
}

const typeDefs = fs.readFileSync('./schema.graphql').toString()

module.exports.schema = makeExecutableSchema({typeDefs, resolvers})

