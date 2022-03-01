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
          imageUrl:
            'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1304&q=80',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl:
            'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl:
            'https://images.unsplash.com/photo-1588099768550-4014589e03e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageUrl:
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          imageUrl:
            'https://images.unsplash.com/photo-1503341603656-0f1764c9df14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
