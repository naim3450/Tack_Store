import products from './Templet.json'
import { homeProductContainer } from './homeProductContainer'
import { showProductContainer } from './showProductContainer'
import { updateCartValue } from './updateCartValue'


updateCartValue()
homeProductContainer(products)
