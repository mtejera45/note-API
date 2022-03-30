const { Schema, model } = require('mongoose')

const productSchema = new Schema(
  {
    imgUrl: String,
    imgDescription: {
      img1: String,
      img2: String,
      img3: String,
      img4: String,
      img5: String,
      img6: String
    },
    alt: String,
    value: String,
    category: String,
    promoTitle: String,
    productName: String,
    shortDescription: String,
    fullDescriptionTitle: String,
    fullDescription: String,
    price: Number,
    available: Boolean,
    delivery: String,
    favorite: Boolean,
    inCart: Boolean,
    counter: Number,
    ratingStars: Number
  }
)

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Product = model('Product', productSchema)

module.exports = Product
