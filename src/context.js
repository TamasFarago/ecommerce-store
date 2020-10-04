import React, { Component } from 'react'
import items from "./Data"

const ProductContext = React.createContext()

export default class ProductProvider extends Component {
    state = {
        products: [],
        sortedProducts: [],
        featuredProducts: [],
        loading: true,
        cart: [],
        total: 0,
    }

    addCart = (id) => {
        const {products, cart} = this.state;
        const check = cart.every(item => {
            return item.id !== id
        })
        if(check){
            const data = products.filter(product => {
                return product.id === id
            })
            this.setState({cart: [...cart,...data]})
        } else {
            alert("The product is already in the cart")
        }
       
    }

    reduction = id => {
        const { cart } = this.state
        cart.forEach(item => {
            if(item.id === id){
                item.count === 1? item.count = 1 : item.count -=1
            }
        })
        this.setState({cart: cart})
        this.getTotal()
    }

    increase = id => {
        const { cart } = this.state
        cart.forEach(item => {
            if(item.id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart})
        this.getTotal()
    }

    removeProduct = id => {
        if(window.confirm("Remove this product from the cart?")){
            const {cart} = this.state
            cart.forEach((item, index) => {
                if(item.id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart})
            this.getTotal()
        }
    }

    componentDidMount(){
        let products = this.formatData(items)
        let featuredProducts = products.filter(product => product.featured
            === true)
        this.setState({
            featuredProducts, products, sortedProducts:products, loading: false
        })
        
    }

    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let product = {...item.fields, images, id}
            return product
        })
        return tempItems
    }

    getProduct = (slug) => {
        let tempProducts = [...this.state.products]
        const product = tempProducts.find(product => product.slug === slug)
        return product
    }

    getTotal = () => {
        const {cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count)
        }, 0)
        this.setState({total: res})
    }

    componentDidUpdate(){
        localStorage.setItem("dataCart", JSON.stringify(this.state.cart))
        localStorage.setItem("dataTotal", JSON.stringify(this.state.total))
    }

    componentWillMount(){
        const dataCart = JSON.parse(localStorage.getItem("dataCart"))
        if(dataCart !== null){
            this.setState({cart: dataCart})
        }
        const dataTotal = JSON.parse(localStorage.getItem("dataTotal"))
        if(dataTotal !== null){
            this.setState({total: dataTotal})
        }
    }


    render() {
        const {cart, total} = this.state
        const {addCart, reduction, increase, removeProduct, getTotal} = this
        return (
        <ProductContext.Provider value={{...this.state, getProduct: this.getProduct, addCart, cart, reduction, increase, removeProduct, total, getTotal}}>
            {this.props.children}
        </ProductContext.Provider>
    ) 
        
    }
}


const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer, ProductContext}