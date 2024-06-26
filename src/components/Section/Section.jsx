import React from 'react';
import './Section.css'


function Section({title, children}) {
    return <div className={'section'}>
        <h3 className="section__title">{title}</h3>
        {children}
    </div>
}

export default Section;