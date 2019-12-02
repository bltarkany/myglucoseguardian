import React, { Component } from 'react';
import "./Accordion.css";

// Example Data
const data = [
  {
    foodid: 1,
    name: 'Example Name 1',
    brand: 'Example Brand 1',
    servingSize: 'Example Serving Size 1',
    quantity: 'Example Quantity 1',
    weight: 50,
    cals: 500,
    carbs: 100
  },
  {
    foodid: 2,
    name: 'Example Name 2',
    brand: 'Example Brand 2',
    servingSize: 'Example Serving Size 2',
    quantity: 'Example Quantity 2',
    weight: 60,
    cals: 300,
    carbs: 150
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
      <div data-id= {foodid}
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}` ,
          onClick: () => { this.setState({ opened: !opened }); console.log(foodid) }
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
              <h6>Carbohydrates</h6>
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