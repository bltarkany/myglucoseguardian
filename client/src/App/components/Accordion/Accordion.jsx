import React, { Component } from 'react';
import "./Accordion.css";

// Example Data
const data = [
  {
    foodid: 1,
    name: 'Example Name',
    brand: 'Example Brand',
    servingSize: 'Example Serving Size',
    quantity: 'Example Quantity',
    weight: 50,
    cals: 500,
    carbs: 100
  },
  {
    foodid: 2,
    name: 'Example Name',
    brand: 'Example Brand',
    servingSize: 'Example Serving Size',
    quantity: 'Example Quantity',
    weight: 50,
    cals: 500,
    carbs: 100
  }

]

class Accordion extends React.Component {
  render () {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        foodid,
        name,
        brand,
        servingSize,
        quantity,
        weight,
        cals,
        carbs
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div id= {foodid} onClick={(e) => console.log(e.target.id)} //Onclick take value
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}` ,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {name}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
                <h6>Brand</h6>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {brand}
              </p>
              <br/>
              <h6>Serving Size</h6>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {servingSize}
              </p>
              <br/>
              <h6>Quantity</h6>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {quantity}
              </p>
              <br/>
              <h6>Weight</h6>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {weight}
              </p>
              <br/>
              <h6>Calories</h6>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {cals}
              </p>
              <br/>
              <h6>carbs</h6>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {carbs}
              </p>
              <br/>
            </div>
          </div>
      </div>
    )
  }
}

export default Accordion

// ReactDOM.render(<Accordion />, document.getElementById('app'));