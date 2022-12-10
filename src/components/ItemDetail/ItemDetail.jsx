import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <>
    <div>{producto.nombre}</div>
    <div>{producto.precio}</div>
    <div>{producto.categoria}</div>
    </>
  )
}

export default ItemDetail