import React from 'react'
import { DocPageProps } from '../../types';

const DocPage: React.FC<DocPageProps> = ({heading, content}) => {
  return (
    <div className='doc'>
      <h1 className='doc-heading'>
        {heading}
      </h1>
      <section className='doc-section'>
        <p className='doc-section__content'>{content}</p>
      </section>
    </div>
  );
}

export default DocPage