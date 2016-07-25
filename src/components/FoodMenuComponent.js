'use strict';

import React from 'react';

require('styles//FoodMenu.sass');

class FoodMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'tssee'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let menu = [
      {
        'id': 0,
        'name': 'Specialty',
        'children': [
          {
            'id': 0,
            'name': 'Chicken Wings',
            'children': [
              {
                'id': 0,
                'name': 'Plain',
                'price': 4
              },
              {
                'id': 1,
                'name': 'with French Fries',
                'price': 5.5
              }
            ],
            'notes': ''
          },
          {
            'id': 1,
            'name': 'Half Chicken',
            'children': [
              {
                'id': 0,
                'name': 'Plain',
                'price': 4
              },
              {
                'id': 1,
                'name': 'with French Fries',
                'price': 5.5
              }
            ],
            'notes': ''
          }
        ]
      },
      {
        'id': 1,
        'name': 'Soup',
        'children': [
          {
            'id': 0,
            'name': 'Wonton Soup',
            'children': [
              {
                'id': 0,
                'name': 'Small',
                'price': 2
              },
              {
                'id': 1,
                'name': 'Large',
                'price': 4
              }
            ],
            'notes': ''
          },
          {
            'id': 0,
            'name': 'Egg Drop Soup',
            'children': [
              {
                'id': 0,
                'name': 'Small',
                'price': 1.5
              },
              {
                'id': 1,
                'name': 'Large',
                'price': 3
              }
            ],
            'notes': ''
          }
        ]
      },
      {
        'id': 1,
        'name': 'Appetizer',
        'children': [
          {
            'id': 0,
            'name': 'Pork Egg Roll',
            'children': [
              {
                'id': 0,
                'name': 'Single',
                'price': 1.1
              }
            ],
            'notes': ''
          },
          {
            'id': 0,
            'name': 'Roast Pork Bun',
            'children': [
              {
                'id': 0,
                'name': 'Single',
                'price': 1.5
              }
            ],
            'notes': ''
          }
        ]
      }
    ];
    return (
      <div className="foodmenu-component container">
        {menu.map((category) => {
          return (
            <div className="category col-md-6" key={category.name}>
              <h2 className="categoryName">{category.name}</h2>
              {category.children.map((item) => {
                return (
                  <div className="item" key={item.name}>
                    <span className="itemName">{item.name}</span>
                    {item.children.map((option) => {
                      return (
                        <div className="option" key={option.name}>
                          <span className="optionName">{option.name}: </span>
                          <span className="optionPrice">{option.price}</span>
                          <button className="optionButton" onClick={() => this.handleClick(option)}>{this.state.text}</button>
                        </div>
                      )
                    })}
                  </div>
                );
              })}
            </div>
          )
        })}
      </div>
    );
  }

  handleClick(option) {
    this.setState({
      text: option.name
    })
  }
}

FoodMenuComponent.displayName = 'FoodMenuComponent';

// Uncomment properties you need
// FoodMenuComponent.propTypes = {};
// FoodMenuComponent.defaultProps = {};

export default FoodMenuComponent;
