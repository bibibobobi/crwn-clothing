import React from 'react';

import MenuItem from './menu-item.component';

import '../Sass/directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: require('../img/img-1.jpeg'),
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'jackets',
          imageUrl: require('../img/img-2.jpeg'),
          id: 2,
          linkUrl: 'jackets',
        },
        {
          title: 'sneakers',
          imageUrl: require('../img/img-3.jpeg'),
          id: 3,
          linkUrl: 'sneakers',
        },
        {
          title: 'womens',
          imageUrl: require('../img/img-4.jpeg'),
          size: 'large',
          id: 4,
          linkUrl: 'womens',
        },
        {
          title: 'mens',
          imageUrl: require('../img/img-5.jpeg'),
          size: 'large',
          id: 5,
          linkUrl: 'mens',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
