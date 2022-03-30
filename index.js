require('dotenv').config()
require('./mongo')
const Sentry = require('@sentry/node')
const Tracing = require('@sentry/tracing')
const express = require('express')
const app = express()
const cors = require('cors')
const Product = require('./models/Product')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')

app.use(cors())
app.use(express.json())
app.use('/images', express.static('images')) // In case we want to deploy images from a folder called 'images'

Sentry.init({
  dsn: 'https://41d15f7d5c40491c8ba3446ad82f2a82@o1182711.ingest.sentry.io/6299503',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app })
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
})
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler())
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler())

app.get('/api/products', (request, response, next) => {
  Product.find({}).then(product => {
    response.json(product)
  }).catch(error => { next(error) })
})
app.get('/api/products/:id', (request, response, next) => {
  const { id } = request.params
  Product.findById(id).then(product => {
    if (product) {
      response.json(product)
    } else {
      response.status(404).end()
    }
  }).catch(error => { next(error) })
})
app.put('/api/products/:id', (request, response, next) => {
  const { id } = request.params
  const product = request.body

  const newProductInfo = {
    imgUrl: product.imgUrl,
    imgDescription: {
      img1: product.img1,
      img2: product.img2,
      img3: product.img3,
      img4: product.img4,
      img5: product.img5,
      img6: product.img6
    },
    alt: product.alt,
    value: product.value,
    category: product.category,
    promoTitle: product.promoTitle,
    productName: product.productName,
    shortDescription: product.shortDescription,
    fullDescriptionTitle: product.fullDescriptionTitle,
    fullDescription: product.fullDescription,
    price: product.price,
    available: product.available,
    delivery: product.delivery,
    favorite: product.favorite,
    inCart: product.inCart,
    counter: product.counter,
    ratingStars: product.ratingStars
  }

  Product.findByIdAndUpdate(id, newProductInfo, { new: true })
    .then(result => {
      response.json(result)
    })
})
app.delete('/api/products/:id', (request, response, next) => {
  const { id } = request.params

  Product.findByIdAndDelete(id)
    .then(() => response.status(204).end())
    .catch(error => next(error))

  response.status(204).end()
})
app.post('/api/products', (request, response, next) => {
  const product = request.body

  if (!product.productName) {
    return response.status(400).json({
      error: `${product.productName} is missing`
    })
  }
  const newProduct = new Product(
    {
      imgUrl: product.imgUrl,
      imgDescription: product.imgDescription,
      alt: product.alt,
      value: product.value,
      category: product.category,
      promoTitle: product.promoTitle,
      productName: product.productName,
      shortDescription: product.shortDescription,
      fullDescriptionTitle: product.fullDescriptionTitle,
      fullDescription: product.fullDescription,
      price: product.price,
      available: product.available,
      delivery: product.delivery,
      favorite: product.favorite,
      inCart: product.inCart,
      counter: product.counter,
      ratingStars: product.ratingStars
    }
  )

  newProduct.save().then(savedNote => {
    response.json(savedNote)
  }).catch(error => { next(error) })
})

app.use(notFound)
app.use(Sentry.Handlers.errorHandler())
app.use(handleErrors)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Sercer running on port ${PORT}`)
})
