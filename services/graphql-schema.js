// import { makeExecutableSchema } from 'graphql-tools'
// import { fs } from 'fs'
// import * as axios from 'axios'
// import _ from 'lodash'
const { makeExecutableSchema } =  require('graphql-tools')
const fs = require('fs')
const axios = require('axios')
const _ = require('lodash')

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

const resolvers = {
  Query:{
    getMake,
    getMakes,
    getModels,
  },
  Make: {
    models(obj, args, context, info) {
      return getModels(obj, args, context, info)
    }
  }
}

const typeDefs = fs.readFileSync('./schema.graphql').toString()

module.exports.schema = makeExecutableSchema({typeDefs, resolvers})

